const cloudinary = require('cloudinary');

cloudinary.config({ 
  cloud_name: 'druneiimf', 
  api_key: '784419194647773', 
  api_secret: 'JIDx_sFp6JSQKEN3NhgcRyNtAO8' 
});

// cloudinary.config({ 
//   cloud_name: 'dg3tzymwn', 
//   api_key: process.env.CLOUDINARY_API_KEY, 
//   api_secret: process.env.CLOUDINARY_API_SECRET, 
// });

module.exports = {cloudinary};