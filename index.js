const els = document.querySelectorAll('.els');

els.forEach((el) => {
  el.addEventListener('click', function() {
    els.forEach((el) => {
      el.style.color = ''; 
    });

    el.style.color = 'rgba(255, 61, 61, 0.956)';
  });
});


const f = document.getElementById('f');
const s = document.getElementById('s');
const t = document.getElementById('t');

f.addEventListener('click', function() {
  const right2Elements = document.getElementsByClassName('right2');
  for (let i = 0; i < right2Elements.length; i++) {
    right2Elements[i].style.display = 'block';
  }
  
  const right1Elements = document.getElementsByClassName('right1');
  for (let i = 0; i < right1Elements.length; i++) {
    right1Elements[i].style.display = 'none';
  }

  const right3Elements = document.getElementsByClassName('right3');
  for (let i = 0; i < right3Elements.length; i++) {
    right3Elements[i].style.display = 'none';
  }
});

s.addEventListener('click', function() {
  const right1Elements = document.getElementsByClassName('right1');
  for (let i = 0; i < right1Elements.length; i++) {
    right1Elements[i].style.display = 'block';
  }
  
  const right2Elements = document.getElementsByClassName('right2');
  for (let i = 0; i < right2Elements.length; i++) {
    right2Elements[i].style.display = 'none';
  }

  const right3Elements = document.getElementsByClassName('right3');
  for (let i = 0; i < right3Elements.length; i++) {
    right3Elements[i].style.display = 'none';
  }
});

t.addEventListener('click', function() {
    const right1Elements = document.getElementsByClassName('right1');
    for (let i = 0; i < right1Elements.length; i++) {
      right1Elements[i].style.display = 'none';
    }
    
    const right2Elements = document.getElementsByClassName('right2');
    for (let i = 0; i < right2Elements.length; i++) {
      right2Elements[i].style.display = 'none';
    }
  
    const right3Elements = document.getElementsByClassName('right3');
    for (let i = 0; i < right3Elements.length; i++) {
      right3Elements[i].style.display = 'flex';
    }
  });
  