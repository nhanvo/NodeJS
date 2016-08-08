/**
 * OOP 1:
 */
var person = {
    ho: "Vo",
    ten: "Nhan",
    chaomung: function () {
        console.log("Chao ban " + this.ho + " " + this.ten);
    }
};

person.chaomung();

/**
 * OOP 2:
 */
function KhoaHoc(ten, hocphi) {
    this.ten = ten;
    this.hocphi = hocphi;
}

KhoaHoc.prototype.mota = function() {
    console.log("Hello " + this.ten + " " + this.hocphi);
}

var nodejs = new KhoaHoc("Lap trinh NodeJS", 8000000);
nodejs.mota();