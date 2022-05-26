function expand_collapse(i,state) {
    if(state=="[Show]"){
        [].forEach.call(document.querySelectorAll('.substep_of_step_'+i), function (el) {
            el.style.display = '';
        });
        document.getElementById('expand_collapse_'+i).innerText = '[Hide]';
    }
    if(state=="[Hide]"){
        [].forEach.call(document.querySelectorAll('.substep_of_step_'+i), function (el) {
            el.style.display = 'none';
        }); 
        document.getElementById('expand_collapse_'+i).innerText = '[Show]';
    }
};