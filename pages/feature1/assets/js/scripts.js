document.addEventListener('DOMContentLoaded', function () {
    const events = document.querySelectorAll('.event');

    events.forEach(event => {
        event.addEventListener('click', function () {
            if (this.classList.contains('active')) {
                this.classList.remove('active');
            } else {
                events.forEach(e => e.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });

    document.addEventListener('click', function (e) {
        if (!e.target.closest('.event')) {
            events.forEach(e => e.classList.remove('active'));
        }
    });
});