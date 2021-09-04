const icon = document.querySelector('.icon');
const colors = document.querySelectorAll('.color');
const line = document.querySelector('.line');
const isiCatatn = document.getElementsByTagName('input')[1];
const fromM = document.getElementsByTagName('input')[0];

var count = 0;

tambahCatatan = (color)=>{
    // tambah catatan
    const catatan = document.createElement('div');
    catatan.classList.add('note');
    catatan.classList.toggle('note-anim');
    catatan.style.backgroundColor = color;
    const isi = document.createElement('p');
    isi.innerHTML = isiCatatn.value;
    isi.classList.add('isi');
    catatan.appendChild(isi);
    const from = document.createElement('p');
    from.classList.add('dari');
    from.innerHTML = `- ${fromM.value} -`;
    catatan.appendChild(from);
    line.appendChild(catatan);
}

colors.forEach(color=>{
    color.addEventListener('click',()=>{
        var warna;
        warna = color.style.backgroundColor;
        console.log(warna)
        tambahCatatan(warna);
        isiCatatn.value = '';
        fromM.value = '';
    });
});

icon.addEventListener('click',()=>{
    count++;
    if(count%2!=0){
        icon.classList.toggle('icon-anim');
        colors.forEach(color=>{
            color.classList.toggle('color-anim-display');
            color.style.marginTop = '20px';
            color.style.display = 'flex';
        });
        
        setTimeout(()=>{
            icon.classList.toggle('icon-anim');
            colors.forEach(color=>{
                color.classList.toggle('color-anim-display');
            });
        },800)
    }
    else {
        icon.classList.toggle('icon-anim');
        colors.forEach(color=>{
            color.classList.toggle('color-hide');
            color.style.marginTop = '-25px';
        });
        setTimeout(()=>{
            icon.classList.toggle('icon-anim');
            colors.forEach(color=>{
                color.classList.toggle('color-hide');
                color.style.display = 'none';
            });
        },800)
    }
});