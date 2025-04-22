const data = {
  layout: "bitflipped_page.vto",
  css: "/bitflipped.css",
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
