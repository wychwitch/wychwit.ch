const data = {
  layout: "main_page.vto",
  hidden: true,
}

export function url(page){
  if (page.data.basename.includes("index")){
    return "./"
  }

  let fic_num = page.data.basename.match(/^\d+/)

  if (fic_num){
    fic_num = fic_num[0]
    return `./${fic_num}/`
  }
  else {
    return `./${page.data.basename}/`
  }
}
export default data;
