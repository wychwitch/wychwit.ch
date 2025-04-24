const data = {
  layout: "main_page.vto",
  hidden: true,
}

export function url(page){
  let fic_num = page.data.basename.match(/^\d+/)
  if (fic_num){
    fic_num = fic_num[0]
  }
  if (fic_num > 0){
    return `./${fic_num}/`
  } else if (fic_num == 0 || page.data.basename.includes("index")){
    return "./"
  } else {
    return `./${page.data.basename}/`
  }
}
export default data;
