const initFilter = () => {
    const buttons = document.querySelectorAll(".filter__btn");
    const items = document.querySelectorAll(".projects__item");

    if (buttons.length === 0) return;


    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const filter = button.getAttribute("data-filter")?.toLowerCase().trim();

            console.log("--- FILTER KLIK ---");
            console.log("Geselecteerde filter:", filter);

            buttons.forEach((btn) => btn.classList.remove("active"));
            button.classList.add("active");

            items.forEach((item) => {
                const raw = item.getAttribute("data-category");
                let categoryList = [];
                try {
                    categoryList = JSON.parse(raw || "[]");
                } catch (e) {
                    categoryList = [];
                }
                categoryList = categoryList.map((c) => String(c).toLowerCase().trim());

                const isMatch = filter === "all" || categoryList.includes(filter);


                if (isMatch) {
                    item.style.display = "";
                } else {
                    item.style.display = "none";
                }
            });
        });
    });

    const allBtn = document.querySelector('[data-filter="all"]');
    if (allBtn) allBtn.classList.add("active");
};

initFilter();
document.addEventListener("astro:page-load", initFilter);