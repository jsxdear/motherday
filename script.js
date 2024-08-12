function showMessage() {
    const messageContainer = document.getElementById('message-container');
    
    // ข้อความบอกรักแม่
    const message = document.createElement('p');
    message.id = 'message';
    message.textContent = " ขอบคุณที่อยู่เคียงข้างหนูเสมอ วันแม่ปีนี้ไม่ขออะไรเลยขอแค่ทุกคนอยู่พร้อมหน้ากันในวันรับปริญญาหนูก็พอ";
    
    // รูปภาพ
    const image = document.createElement('img');
    image.id = 'image';
    image.src = 'https://missiontothemoon.co/wp-content/uploads/2021/08/%E0%B8%AD%E0%B8%B0%E0%B9%84%E0%B8%A3%E0%B8%84%E0%B8%B7%E0%B8%AD%E0%B8%9A%E0%B8%97%E0%B9%80%E0%B8%A3%E0%B8%B5%E0%B8%A2%E0%B8%99%E0%B8%8A%E0%B8%B5%E0%B8%A7%E0%B8%B4%E0%B8%95%E0%B8%88%E0%B8%B2%E0%B8%81%E0%B9%81%E0%B8%A1%E0%B9%881920x1080-1.jpg'; // ใส่ URL รูปภาพที่คุณต้องการ

    // แสดงข้อความและรูปภาพ
    messageContainer.innerHTML = '';
    messageContainer.appendChild(message);
    messageContainer.appendChild(image);
    messageContainer.style.display = 'block';

    // แสดงปุ่มแชร์ลิงก์
    const shareContainer = document.getElementById('share-container');
    shareContainer.style.display = 'block';

}

function shareLink() {
    const pageUrl = 'https://github.com/jsxdear/mother-day.git';
    if (navigator.share) {
        navigator.share({
            title: 'บอกรักแม่',
            text: 'มาดูเว็บที่ฉันสร้างเพื่อบอกรักแม่กันเถอะ!',
            url: pageUrl,
        }).then(() => {
            console.log('แชร์สำเร็จ!');
        }).catch((error) => {
            console.log('เกิดข้อผิดพลาดในการแชร์:', error);
        });
    } else {
        alert('เบราว์เซอร์ของคุณไม่รองรับการแชร์ผ่าน Web Share API');
    }
}

