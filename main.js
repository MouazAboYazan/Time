function updateTime() {
    let now = new Date();
    let hour = now.getHours() % 12 || 12; // convert 0 to 12 for 12-hour system
    let minute = now.getMinutes().toString().padStart(2, '0'); // add leading zero if needed
    let second = now.getSeconds().toString().padStart(2, '0'); // add leading zero if needed
    let ampm = now.getHours() >= 12 ? 'PM' : 'AM';
    let timeString = `${hour}:${minute}:${second} ${ampm}`;
    document.querySelector('.time').textContent = timeString;
    setTimeout(updateTime, 1000);
  }
  
  updateTime();
  