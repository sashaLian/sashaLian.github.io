let btn = document.getElementById('showall'),
    section =  document.getElementById('portfolio'),
    text =  document.getElementById('text'),
    show = document.getElementById('secondBlog'),
    prev = document.getElementById('prev'),
    next = document.getElementById('next'),
    project = Array.from(document.getElementsByClassName('project__blog')),
    i = 0;

btn.addEventListener('click', function() {
    section.style.backgroundImage = "url('../../img/portfolio/second_portfolio_img.png')";
    text.style.display = 'block';
    project.forEach((div) => {
            div.classList.remove('project__blog_two');
            div.classList.add('project__blog_active');
    });
});

prev.addEventListener('click', () => {i--; iterate();});
next.addEventListener('click', () => {i++; iterate();});

 function  iterate() {
     console.log(i)
     let last = project.length -1;
     if (i < 0) {
         i = last;
     }
     if (i > last) {
         i = 0;
     }
     project.forEach((div, idx) => {
         if (idx === i) {
             div.classList.remove('project__blog_two');
             div.classList.add('project__blog_active');
         } else {
             div.classList.add('project__blog_two');
         }
     });
 }







