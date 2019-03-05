var loopProp = setInterval(propSearch, 1000);
var loopCount = 0;
function propSearch() {
                                           if ((countryName == 'Australia' || countryName == 'United States' || countryName == 'Canada' || countryName == 'Switzerland' || countryName == 'Norway' || countryName == 'Ghana' || countryName == 'Djibouti' || countryName == 'Eritrea' || countryName == 'Ethiopia' || countryName == 'Rwanda' || countryName == 'Tanzania United Republic' || countryName == 'Uganda' || countryName == 'Angola' || countryName == 'Mauritius' || countryName == 'Botswana' || countryName == 'Lesotho' || countryName == 'Malawi' || countryName == 'Mozambique' || countryName == 'Namibia' || countryName == 'Swaziland' || countryName == 'Zambia' || countryName == 'Zimbabwe' || countryName == 'United Kingdom' || countryName == 'Ireland') && (userLanguage == 'en' || userLanguage == 'enen')) {
                loopCount++;
                if(typeof s_prop1 !== "undefined" && typeof s_prop3 !== "undefined" && typeof s_prop4 !== "undefined" && typeof s_prop7 !== "undefined" && typeof s_prop14 !== "undefined" && typeof s_prop16 !== "undefined" && typeof s_pageName !== "undefined") {
                                                                        clearInterval(loopProp);
                                                                        var var1 = encodeURIComponent(s_prop1);
                                                                        var var2 = encodeURIComponent(s_prop3);
                                                                        var var3 = encodeURIComponent(s_prop4);
                                                                        var var4 = encodeURIComponent(s_prop7);
                                                                        var var5 = encodeURIComponent(s_prop14);
                                                                        var var6 = encodeURIComponent(s_prop16);
                                                                        var var7 = encodeURIComponent(s_pageName);
                                                                        var var8 = encodeURIComponent(window.location.href);
                                                                        var var9 = encodeURIComponent(document.getElementsByClassName("partnerName")[0].innerText);
                                                                        var esmURL;
                                                                        var moreInfo = window.location.href.split('/');

                                                                        // INSERT HIDDEN OVERLAY
                                                                        document.body.insertAdjacentHTML('beforeend', '<div id="overlayfeedback" style="display: none;position: absolute; left: 0; top: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.5); z-index: 9999;"></div>');

                                                                        // INSERT HIDDEN BUTTON
                                                                        document.body.insertAdjacentHTML('beforeend', '<button id="myBtn" style="display: none;padding: 0px; border: none; cursor: pointer; position: fixed; top: 50%; margin-top: -60px; box-sizing: unset; background: none;"><img src="https://partner.hpe.com/documents/46678/0/feedbackbutton.PNG"></button>');

                                                                        // INSERT HIDDEN MODAL
                                                                        document.body.insertAdjacentHTML('beforeend', '<div id="myModal" class="modal" style="display: none; position: fixed; z-index: 99999; left: 50%; top: 50%; margin-left: -315px; margin-top: -252px; width: 630px; height: 524px;"><div class="modal-content"><span class="close" style="font-size: 21px; font-weight: bold; cursor: pointer; position: absolute; right: -10px; background: #00B388; width: 20px; height: 20px; top: -11px; text-align: center; line-height: 0.9; border-radius: 50%; color: #fff;">×</span><iframe id="esmURL" style="width: 100%;height: 545px;border: none;" src=""></div></div>');

                                                                        // FULL NAME

                                                                        // IFRAME URL VARIABLE
                                                                        esmURL = 'https://partner.hpe.com/group/'+moreInfo[4]+'/jump/-/link/193205?id=2421&var1='+var1+'&var2='+var2+'&var3='+var3+'&var4='+var4+'&var5='+var5+'&var6='+var6+'&var7='+var7+'&var8='+var8+'&var9='+var9+'';

                                                                        // ON BUTTON CLICK INSERT IFRAME URL
                                                                                      // Get the modal
                                                                        var modal = document.getElementById('myModal');

                                                                        // Get the overlay
                                                                        var overlay = document.getElementById('overlayfeedback');

                                                                        // Get the button that opens the modal
                                                                        var btn = document.getElementById("myBtn");

                                                                        // Get the iframe
                                                                        var iframelocation = document.getElementById("esmURL");

                                                                        // Get the <span> element that closes the modal
                                                                        var span = document.getElementsByClassName("close")[0];

                                                                        // When the user clicks the button, open the modal 
                                                                        btn.onclick = function() {
                                                                            modal.style.display = "block";
                                                                            overlay.style.display = "block";
                                                                            iframelocation.src = esmURL;
                                                                        }

                                                                        // When the user clicks on <span> (x), close the modal
                                                                        span.onclick = function() {
                                                                            modal.style.display = "none";
                                                                            overlay.style.display = "none";
                                                                        }

                                                                        // When the user clicks anywhere outside of the modal, close it
                                                                        window.onclick = function(event) {
                                                                            if (event.target == modal) {
                                                                                modal.style.display = "none";
                                                                                overlay.style.display = "none";
                                                                            }
                                                                        }
                                                                        btn.style.display = "block";


                                                          } else if(loopCount == 10) clearInterval(loopProp);
                             }
}
 

