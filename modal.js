'use strict';

var Modal = function(ele) {
    this.init(ele);
}

Modal.prototype.init = function(ele) {
    var _this = this;
    var modal = document.querySelector(ele);

    _this.modal = modal.cloneNode(true);
    _this.modal.setAttribute('class', 'modal');
    modal.style.display = 'none';
    _this.modal.style.display = 'block';

    _this.modalWrapper = document.createElement('div');
    _this.modalWrapper.setAttribute('class', 'modal-wrapper');
    _this.modalWrapper.style.height = document.body.offsetHeight + 'px';
    _this.modalWrapper.style.width = document.body.offsetWidth + 'px';
    _this.modalWrapper.appendChild(_this.modal);
    document.body.appendChild(_this.modalWrapper);


    _this.modalWrapper.addEventListener('click', function(ev) {
        _this.hide();
    }, false);
    _this.modal.addEventListener('click', function(ev) {
        ev.stopPropagation();
    }, false);
}

Modal.prototype.show = function() {
    var _this = this;
    this.modalWrapper.style.display = 'block';
    var modalTop = window.innerHeight / 2 - _this.modal.offsetHeight / 2;
    var modalLeft = window.innerWidth / 2 - _this.modal.offsetWidth / 2;
    _this.modal.style.top = modalTop + 'px';
    _this.modal.style.left = modalLeft + 'px';

    window.addEventListener('resize', function() {
        var modalTop = window.innerHeight / 2 - _this.modal.offsetHeight / 2;
        var modalLeft = window.innerWidth / 2 - _this.modal.offsetWidth / 2;
        _this.modal.style.top = modalTop + 'px';
        _this.modal.style.left = modalLeft + 'px';
        _this.modalWrapper.style.height = document.body.offsetHeight + 'px';
        _this.modalWrapper.style.width = document.body.offsetWidth + 'px';
    }, false);
};

Modal.prototype.hide = function() {
    var _this = this;
    _this.modalWrapper.parentNode.removeChild(_this.modalWrapper);
};
