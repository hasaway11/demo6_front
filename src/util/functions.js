function getPageno(raw) {
  let pageno = parseInt(raw, 10);
  if (isNaN(pageno) || pageno < 1)
    pageno = 1;
  return pageno;
}


export {getPageno}