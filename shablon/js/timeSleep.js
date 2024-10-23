setTimeout(() => {

    const scriptJqueryMin = document.createElement('script')
    const scriptPopperMin = document.createElement('script')
    const scriptBootstrapMin = document.createElement('script')
    const scriptOwlCarouselMin = document.createElement('script')
    const scriptJqueryWaypointsMin = document.createElement('script')
    const scriptJqueryFancyboxMin = document.createElement('script')
    const scriptJMain = document.createElement('script')

    scriptJqueryMin.src = "js/jquery-3.2.1.min.js"
    scriptPopperMin.src = "js/popper.min.js"
    scriptBootstrapMin.src = "js/bootstrap.min.js"
    scriptOwlCarouselMin.src = "js/owl.carousel.min.js"
    scriptJqueryWaypointsMin.src = "js/jquery.waypoints.min.js"
    scriptJqueryFancyboxMin.src = "js/jquery.fancybox.min.js"
    scriptJMain.src = "js/main.js"

    document.body.append(scriptJqueryMin)
    document.body.append(scriptPopperMin)
    document.body.append(scriptBootstrapMin)
    document.body.append(scriptOwlCarouselMin)
    document.body.append(scriptJqueryWaypointsMin)
    document.body.append(scriptJqueryFancyboxMin)
    document.body.append(scriptJMain)
}, 1000)