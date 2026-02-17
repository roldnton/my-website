function greeting() {
    const date = new Date();
    const hour = date.getHours();
    let greetingMessage;

    if (hour >= 0 && hour < 12) {
        greetingMessage = "Good Morning!";
    } else if (hour >= 12 && hour < 17) {
        greetingMessage = "Good Afternoon!";
    } else if (hour >= 17 && hour < 21) {
        greetingMessage = "Good Evening!";
    } else {
        greetingMessage = "Good Night!";
    }
    alert(greetingMessage);
}

function updateClock() {
    const now = new Date();
    // Get hours, minutes, seconds
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();
           
    // Add AM/PM logic            
    let session = "AM";           
    if (h == 0) {                
        h = 12;            
    }            
    if (h > 12) {             
        h = h - 12;                
        session = "PM";            
    }
            
    // Add "leading zeros" so 1:5 becomes 01:05            
    h = (h < 10) ? "0" + h : h;            
    m = (m < 10) ? "0" + m : m;    
    s = (s < 10) ? "0" + s : s;

            
    // Combine into a string       
    const timeString = h + ":" + m + ":" + s + " " + session;
        
    // Update the HTML
    document.getElementById("digital-clock").textContent = timeString;
                        
    // Optional: Update Date
    document.getElementById("date-display").textContent = now.toDateString();
}

        
function initPage() { 
    greeting();                  
    updateClock();
    setInterval(updateClock, 1000);  
}