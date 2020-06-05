
console.log("Exported the module");
const {home, about, contact} = require('../controllers/PagesController');

// module.exports = router => {
//     router.get('/', (req, res) => {
//         console.log("Wellcome tommy");
//         res.send('Welcome Home')
//     });
// };

module.exports = router => {
router.get('/', home);
router.get('/about', about);
router.get('/contact', contact);

// router.get('/about', (req, res) => {
//     console.log("Wellcome tommy");
//     res.send('About me')
// });   
 };