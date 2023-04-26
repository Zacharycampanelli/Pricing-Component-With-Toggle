const planType = document.querySelector('#plan_type');
const planWrapper = document.querySelectorAll('.plan-wrapper li')
const options = document.querySelectorAll('.option')
planType.addEventListener('click', () => {
    console.log(planType.checked)
    console.log(planWrapper);
    // input starts at false
    // if true, add hide to all annual, remove hide from all monthly
    for (option of options) {
        if(option.classList.contains('annual')) {
            console.log('yes')
        } else {
            console.log('no')
        }
    }
})