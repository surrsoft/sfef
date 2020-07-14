module.exports = (req, res, next) => {
  console.log('req.body', req.body)
  const oj = req.body;
  console.log('!!-!!-!! oj.title {200713154835}\n', oj.title); // del+
  if (!oj.title) {
    console.log('br- --- ---')

    // res.statusCode = 501
    // res.setHeader('Content-Type', 'text/plain');
    // res.end('br- title is empty')
  }
  next()
}
