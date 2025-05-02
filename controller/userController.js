import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Photo from "../models/photoModel.js";
import {v2 as cloudinary} from 'cloudinary';
import fs from 'fs';

const createUser = async (req, res) => {
  try {
    const formData = req.body;
    const file = req.files.profilePic;

    // Cloudinary'e dosyayı yükleyin
    const result = await cloudinary.uploader.upload(file.tempFilePath, {
      use_filename: true,
      folder: 'lenslight_tr',
    });

    // Kullanıcıyı oluşturun
    const user = await User.create({
      userName: formData.userName,
      email: formData.email,
      password: formData.password,
      profilePhoto: {   // Profil fotoğrafı URL ve ID'sini kaydet
        url: result.secure_url,
        image_id: result.public_id
      }    // Cloudinary ID'sini kaydedin
    });
    fs.unlinkSync(file.tempFilePath);
    res.status(201).json({ user: user._id });

  } catch (error) {
    console.log('ERROR', error);

    let errors2 = {};

    if (error.code === 11000) {
      errors2.email = 'The Email is already registered';
    }

    if (error.name === 'ValidationError') {
      Object.keys(error.errors).forEach((key) => {
        errors2[key] = error.errors[key].message;
      });
    }

    res.status(400).json(errors2);
  }
};
const loginUser = async (req,res) => {
    try {
        const {userName,password} = req.body;
        const user = await User.findOne({userName});
        let same = false;
        if(user){
            // Kullanıcı bulunduysa şifreleri karşılaştırıyoruz.
            same = await bcrypt.compare(password,user.password);
        }
        else{
            // Kullanıcı bulunamadıysa hata döndürüyoruz.
           return res.status(401).json({succeded:false, error:"There is no user with that name"});
        }

        if(same){
            const token = createToken(user._id);
            res.cookie('jwt', token, {
                httpOnly: true,
                maxAge: 86400000 // 24 saat
            });
            res.redirect('/users/dashboard');
        }
        else{
            // Şifre eşleşmiyorsa hata döndürüyoruz.
            res.status(401).json({succeded:false, error:"Wrong password"});
        }
    } catch (error) {
        res.status(500).json({succeded:false, error});
    }
};

const createToken = (userId) => {
    return jwt.sign({userId}, process.env.JWT_SECRET, {
        expiresIn: "1d"
    } )
};

const getDashboardPage = async (req,res) => {
  const photos = await Photo.find({user: res.locals.user._id});
  const user = await User.findById({_id: res.locals.user._id}).populate([
    'followers',
    'followings'
  ]);
  res.render('dashboard',{
    link: "dashboard",
    photos,
    user
}); };

const getAllusers = async (req,res) => {
  try{
      // --------------------------------- uygulamaya giren kullanıcının  profili gözükmez
      const users = await User.find({ _id: { $ne: res.locals.user._id}});
      res.status(200).render("users", {
      users, 
      link: "users"
      });
  }
  catch (error) {
      res.status(500).json({succeded:false, error});
  }
  
}

const getAuser = async (req,res) => {
  try{
      const user = await User.findById({_id : req.params.id});

      const inFollowers = user.followers.some((follower) => {
        return follower.equals(res.locals.user._id);
      });

      const photos = await Photo.find({user: user._id});
      res.status(200).render('user', { 
      user, 
      photos, //Kullanıcının Yüklediği fotolar
      link: 'users',
      inFollowers
      });
  }
  catch (error) {
      res.status(500).json({succeded:false, error});
  }
  
}

const follow = async (req, res) => {
  // res.locals.user._id
  try {
    let user = await User.findByIdAndUpdate(
      { _id: req.params.id },
      {
        $push: { followers: res.locals.user._id },
      },
      { new: true }
    );

    user = await User.findByIdAndUpdate(
      { _id: res.locals.user._id },
      {
        $push: { followings: req.params.id },
      },
      { new: true }
    );

    res.status(200).redirect(`back`)
  } catch (error) {
    res.status(500).json({
      succeded: false,
      error,
    });
  }
};

const unfollow = async (req, res) => {
  // res.locals.user._id
  try {
    let user = await User.findByIdAndUpdate(
      { _id: req.params.id },
      {
        $pull: { followers: res.locals.user._id },
      },
      { new: true }
    );

    user = await User.findByIdAndUpdate(
      { _id: res.locals.user._id },
      {
        $pull: { followings: req.params.id },
      },
      { new: true }
    );

    res.status(200).redirect(`back`)
  } catch (error) {
    res.status(500).json({
      succeded: false,
      error,
    });
  }
};

export {createUser,loginUser, getDashboardPage, getAllusers,getAuser,follow,unfollow};