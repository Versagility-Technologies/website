$(function () {
    const url = new URL(window.location);
    const modalId = url.searchParams.get("opportunity");

    if (modalId) {
        url.searchParams.delete("opportunity");
        history.replaceState({}, "", url);
        $("#opportunity-" + modalId).modal("show");
    }
});