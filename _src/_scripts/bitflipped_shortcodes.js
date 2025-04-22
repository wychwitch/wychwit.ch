export default function bitflipped_shortcodes(result)
{

  let regex_list = [
    {
      reg: /(?<=^da: .*)[aA]/gm,
      replacement: "Δ",
    },
    {
      reg: /(?<=^fa: .*)[aA]/gm,
      replacement: "Λ",
    },
    {
      reg: /(?<=^da: .*)(\b[iI]\b)/gm,
      replacement: "III",
    },
    {
      reg: /(?<=^da: .*)([eE])/gm,
      replacement: "3",
    },
    {
      reg: /^--pester\s*$/gm,
      replacement: "<section class=\"border-2 border-black border-dashed p-2 m-2\">"
    },
    {
      reg: /^--pester-begin-fa-da--/gm,
      replacement: '<div class="weight-bold text-center"><span class="hidden lg:inline">--</span> gallantChampion<span class=text-bf_fa>[GC]</span> began trolling celestialGnostic<span class=text-bf_da>[CG]</span> <span class="hidden lg:inline">--</span></div>'
    },
    {
      reg: /^pester--\s*/gm,
      replacement: '</section>'
    },
    {
      reg: /(^da: )(.*)$/gm,
      replacement: '<div class="text-bf_da weight-bold">CG: $2</div>'
    },
    {
      reg: /(^fa: )(.*)$/gm,
      replacement: '<div class="text-bf_fa text-bold">GC: $2</div>'
    },
  ]

  for (let i = 0; i < regex_list.length; i++){
    result = result.replace(regex_list[i].reg, regex_list[i].replacement)
  }
  return result;


}
