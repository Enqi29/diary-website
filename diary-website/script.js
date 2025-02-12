// script.js
const password = "0329";

function showPasswordModal() {
    document.getElementById("passwordModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("passwordModal").style.display = "none";
}

function checkPassword() {
    const input = document.getElementById("passwordInput").value;
    if (input === password) {
        document.getElementById("homePage").classList.add("hidden");
        document.getElementById("diaryPage").classList.remove("hidden");
        closeModal();
    } else {
        alert("密码错误！");
    }
}

function showDiaryForm() {
    document.getElementById("diaryFormModal").style.display = "flex";
}

function closeDiaryForm() {
    document.getElementById("diaryFormModal").style.display = "none";
}

function saveDiary() {
    const content = document.getElementById("diaryContent").value;
    const date = document.getElementById("dateInput").value;
    const day = document.getElementById("dayOfWeek").value;
    const image = document.getElementById("imageUpload").files[0];

    // 保存日记逻辑（可以存储到本地或后端）
    console.log("日记已保存：", { content, date, day, image });

    closeDiaryForm();
    showEmotionModal();
}

function showEmotionModal() {
    document.getElementById("emotionModal").style.display = "flex";
}

function selectEmotion(emotion) {
    const motivations = {
        happy: "今天也是元气满满的一天！",
        sad: "没关系，明天会更好！",
        // 其他情绪
    };
    document.getElementById("motivationText").innerText = motivations[emotion];
    document.getElementById("emotionModal").style.display = "none";
    document.getElementById("motivationModal").style.display = "flex";
}

function closeMotivationModal() {
    document.getElementById("motivationModal").style.display = "none";
}