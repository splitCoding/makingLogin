module.exports = (req, res, next)=>{
  if(req.isAuthenticated()){
    next();
  } else {
    res.send('<script>alert("로그인 후 사용가능합니다"); location.href = "/"</script>');
  }
}