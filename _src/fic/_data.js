const data = {
  layout: "layout.vto",
  hidden: true,
}

export function url(page){
  if (page.data?.num > 0){
    return `./${page.data.num}/`
  } else if (page.data?.num == 0){
    return "./"
  } else {
    return `./${page.data.title}/`
  }
}
export default data;
