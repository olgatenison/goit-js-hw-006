const allCategoriesEl = newFunction();
function newFunction() {
    return document.querySelector('ul#categories');
}
console.log(allCategoriesEl);

const categoryItemsRef = allCategoriesEl.querySelectorAll('.item');
console.log('Number of categories:', categoryItemsRef.length);


allCategoriesEl.forEach( (element) => {

        const titleEl = element.firstElementChild.textContent;
        console.log(`Category: ${titleEl}`);

        const itemsEl = element.lastElementChild.children.length;
        console.log(`Elements: ${itemsEl}`);
});




