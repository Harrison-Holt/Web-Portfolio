function scrollToNext(index) {
    const sections = document.querySelectorAll('.timeline-section');
    if (sections[index]) {
        sections[index].scrollIntoView({ behavior: 'smooth', inline: 'start' });
    }
}

