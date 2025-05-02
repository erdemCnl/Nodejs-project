Node.js, Express ve MongoDB ile oluşturulmuş kapsamlı bir fotoğraf blog uygulaması. Kullanıcılar hesap oluşturabilir, fotoğraf yükleyebilir ve fotoğraf topluluğuyla etkileşimde bulunabilirler.

## Özellikler

- 📷 **Fotoğraf Yönetimi**: Fotoğraf yükleme, görüntüleme, güncelleme ve silme
- 👤 **Kullanıcı Kimlik Doğrulama**: Kullanıcı kaydı, giriş ve profil yönetimi
- 🔒 **Yetkilendirme**: Kullanıcı izinlerine dayalı güvenli rotalar ve içerik
- 💾 **Bulut Depolama**: Fotoğraf depolama için Cloudinary entegrasyonu
- 🎨 **Duyarlı Tasarım**: EJS şablonları kullanarak modern ve kullanıcı dostu arayüz

## Teknoloji Yığını

- **Backend**: Node.js, Express.js
- **Veritabanı**: MongoDB ve Mongoose
- **Şablon Motoru**: EJS
- **Kimlik Doğrulama**: JWT (JSON Web Tokens)
- **Dosya Yükleme**: Cloudinary entegrasyonlu Express-fileupload
- **CSS**: Duyarlı tasarımlı özel stillemeler
- **Deployment**: Heroku dağıtımı için hazır (Procfile dahil)

## Proje Yapısı

```
├── app.js                # Ana uygulama dosyası
├── db.js                 # Veritabanı bağlantı kurulumu
├── controller/           # Uygulama denetleyicileri
│   ├── pageController.js # Sayfa render işlemleri
│   ├── photoController.js # Fotoğraf CRUD işlemleri
│   └── userController.js # Kullanıcı kimlik doğrulama ve yönetimi
├── middlewares/          # Özel middleware fonksiyonları
├── models/               # Veritabanı modelleri
│   ├── photoModel.js     # Fotoğraf şeması ve modeli
│   └── userModel.js      # Kullanıcı şeması ve modeli
├── public/               # Statik dosyalar
├── routes/               # Uygulama rotaları
│   ├── pageRoute.js      # Genel sayfa rotaları
│   ├── photoRoute.js     # Fotoğraf CRUD rotaları
│   └── userRoute.js      # Kullanıcı yönetimi rotaları
└── views/                # EJS şablonları
    └── partials/         # Yeniden kullanılabilir şablon bileşenleri
```

## Kurulum ve Yapılandırma

1. Depoyu klonlayın
   ```
   git clone https://github.com/erdemCnl/Nodejs-project.git
   cd Nodejs-project
   ```

2. Bağımlılıkları yükleyin
   ```
   npm install
   ```

3. Kök dizinde şu değişkenlerle bir `.env` dosyası oluşturun:
   ```
   PORT=3000
   DB_URI=mongodb_baglanti_adresiniz
   CLOUD_NAME=cloudinary_cloud_name
   CLOUD_API_KEY=cloudinary_api_key
   CLOUD_API_KEY_SECRET=cloudinary_api_secret
   JWT_SECRET=jwt_gizli_anahtariniz
   ```

4. Uygulamayı başlatın
   ```
   npm start
   ```

5. Geliştirme için otomatik yeniden başlatma ile:
   ```
   npm install -g nodemon
   nodemon app.js
   ```

## Kullanım

- Uygulamaya `http://localhost:3000` adresinden erişin
- Yeni bir kullanıcı hesabı oluşturun
- Kimlik bilgilerinizle giriş yapın
- Fotoğraf yüklemek ve yönetmek için kontrol paneline gidin
- Galerideki tüm fotoğrafları görüntüleyin
- Kullanıcı profillerini keşfedin

## Dağıtım

Uygulama, Heroku veya benzer platformlara kolay dağıtım için bir Procfile içerir. Hosting platformunuzda çevre değişkenlerini ayarlamayı unutmayın.

## Lisans

Bu proje açık kaynaklıdır ve MIT Lisansı altında kullanılabilir.

## Yazar

[Erdem Canli](https://github.com/erdemCnl) tarafından oluşturulmuştur. 