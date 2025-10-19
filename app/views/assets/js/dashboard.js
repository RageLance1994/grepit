const sections = [
    { title: 'Home', icon: 'fa fa-home', tab: 'tab_home' },
    { title: 'Contabilità', icon: 'fa fa-calculator', tab: 'tab_tracking' },
    {
        title: 'Fatture', icon: 'fa fa-file-text', tab: 'tab_invoices', sub: [
            { title: 'Registra', icon: 'fa fa-plus', tab: 'tab_inv-new' },
            { title: 'Storico', icon: 'fa fa-table', tab: 'tab_inv-history' },
        ]
    },
    { title: 'Adempimenti', icon: 'fa fa-balance-scale', tab: 'tab_taxes' },
    { title: 'Documenti', icon: 'fa fa-file', tab: 'tab_docs' },


]
const sectionWrapper = document.querySelector('.nav-sections')

async function generateNavSections(section) {
    let hyperlink = document.createElement('a')
    hyperlink.classList.value = "wrapper-v nopadding h-min-content side-button bordered-grid"
    hyperlink.dataset.tab = section.tab
    let subtrigger = !section.sub ? `` : `
    <div class="sub-button wrapper-v j-start a-center w-100">
        ${section.sub.map((s) => {
        let _html = `
            <div class="wrapper-h j-start a-center cg-382 nopadding">
                <i class="${s.icon}"></i>
                <p>${s.title}</p>
            </div>`
        return (_html)
    }).join('')
        }
    </div>
    `
    hyperlink.innerHTML = `                    
                        <div class="wrapper-h">
                        <div class="wrapper-h j-start cg-1618 nopadding">
                            <i class="${section.icon}"></i>
                            <p class="fwb">${section.title}</p>
                        </div>
                        <div class="wrapper-h nopadding j-end a-center">
                                <a class="sub-toggle"><i class="fa fa-caret-down"></i></a>
                                </div>

                        </div>
                        ${subtrigger}
                    `


    sectionWrapper.appendChild(hyperlink)
        setInterval(() => {
            hyperlink.classList.toggle('closed')
        },3000)


}

sections.forEach(generateNavSections)