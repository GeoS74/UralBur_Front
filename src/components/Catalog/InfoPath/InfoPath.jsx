


export default function InfoPath({alias, levelsAll}) {
    let infoPath = _searchId(alias, levelsAll, [['Каталог', 'products.html']])
    return (
        <div className="col-lg text-lg-center  mb-5" >
            {infoPath.map((value, index) => 
                <a key={index} className="btn btn-outline-primary px-4 py-3 m-1" href={value[1]}>{value[0]}</a>                    
                )}
        </div>
    )
}
function _searchId(alias, levelsAll, listHref) {
    for (let i=0; i < levelsAll.length; i++) {
        let newList = listHref.slice()
        if (levelsAll[i]['alias'] === alias) {
            return newList
        } else {
            if (levelsAll[i]['childs'].length !== 0) {
                newList.push([levelsAll[i]['title'], `http://127.0.0.1:5500/build/section.html?levelAlias=${levelsAll[i]['alias']}`])
                let result = _searchId(alias, levelsAll[i]['childs'], newList)
                if (result) {
                    return result
                }
            } else {
              continue
            }
        }      
    }





    // for (let i=0; i < levelsAll.length; i++) {
    //     let newList = listHref.slice()
    //   if (levelsAll[i]['alias'] === alias) {
    //     newList.push([levelsAll[i]['title'], levelsAll[i]['alias']])
    //     return newList
    //   } else {
    //     if (levelsAll[i]['childs'].length !== 0) {
    //       listHref.push([levelsAll[i]['title'], levelsAll[i]['alias']])
    //       newList = _searchId(alias, levelsAll[i]['childs'], newList)
    //     } else {
    //       continue
    //     }
    //   }
    //   console.log(newList)
    // }
    // return newList.slice(0, -1)
  }