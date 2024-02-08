document.addEventListener("DOMContentLoaded", function () {
    burgerMenuInit();
    companySelectorInit();
    leftNavInit();
    openTab('limits');
});

function companySelectorInit() {
    document.getElementById("selectedCompany").addEventListener("click", function () {
        this.parentNode.classList.toggle("company-dropdown_open");
    });
}

function selectCompany(companyName) {
    document.getElementById("selectCompanyInit").textContent = companyName.charAt(0);
    document.getElementById("selectCompanyName").textContent = companyName;
    document.querySelector(".company-dropdown").classList.remove("company-dropdown_open");
}

function leftNavInit() {
    const menuItems = document.querySelectorAll(".setting-tabs__item");

    menuItems.forEach(item => {
        item.addEventListener("click", function (e) {
            e.preventDefault();
            menuItems.forEach(t => t.classList.remove("active"));
            this.classList.add("active");
            if (this.id !== "planAndLimits") {
                document.querySelector("#invocing.content").classList.add("content_closed");
                document.querySelector("#empty-element").classList.remove("content_closed");
            } else {
                document.querySelector("#invocing").classList.remove("content_closed");
                document.querySelector("#empty-element.content").classList.add("content_closed");
            }
        });
    });
}


function openTab(tabId) {
    const tabContents = document.getElementsByClassName('statistics__tab-content');
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = 'none';
    }
    const tabs = document.getElementsByClassName('statistics__tab-item');
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('active');
    }
    const contentId = tabId.replace('tab', '');
    document.getElementById('tabContent_' + contentId).style.display = 'block';
    document.getElementById(tabId).classList.add('active');
}

function burgerMenuInit() {
    const burgerMenuButton = document.getElementById('burgerMenu');
    burgerMenuButton.addEventListener("click", function () {
        this.classList.toggle('active');
    });
}