(function($) {
    "use strict";

    $(document).ready(function() {

        /*========================================
        RGBA Color Code Js start
        ========================================
        */

        function hexToRgb(hex, result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)) {
            return result ? result.map(i => parseInt(i, 16)).slice(1) : null
        }

        var getRoot = document.querySelector(':root');
        // Create a function for getting a variable value
        function myFunction_get(getRoot) {
            // Get the styles (properties and values) for the root
            var getRootStyle = getComputedStyle(getRoot);

            // let hexOne = (getRootStyle.getPropertyValue('--main-color-one')).trim()?.toString();
            let rgbOne = hexToRgb((getRootStyle.getPropertyValue('--main-color-one')).trim())?.toString();
            let rgbTwo = hexToRgb((getRootStyle.getPropertyValue('--main-color-two')).trim())?.toString();
            let rgbThree = hexToRgb((getRootStyle.getPropertyValue('--main-color-three')).trim())?.toString();
            let rgbPrimary = hexToRgb((getRootStyle.getPropertyValue('--primary')).trim())?.toString();
            let rgbSecondary = hexToRgb((getRootStyle.getPropertyValue('--secondary')).trim())?.toString();
            let rgbSuccess = hexToRgb((getRootStyle.getPropertyValue('--success')).trim())?.toString();
            let rgbDanger = hexToRgb((getRootStyle.getPropertyValue('--danger')).trim())?.toString();
            let rgbInfo = hexToRgb((getRootStyle.getPropertyValue('--info')).trim())?.toString();
            let rgbDark = hexToRgb((getRootStyle.getPropertyValue('--dark')).trim())?.toString();
            let rgbLight = hexToRgb((getRootStyle.getPropertyValue('--light')).trim())?.toString();
            let rgbBlue = hexToRgb((getRootStyle.getPropertyValue('--blue')).trim())?.toString();
            let rgbPurple = hexToRgb((getRootStyle.getPropertyValue('--primary')).trim())?.toString();
            let rgbOrange = hexToRgb((getRootStyle.getPropertyValue('--orange')).trim())?.toString();
            let rgbBrown = hexToRgb((getRootStyle.getPropertyValue('--brown')).trim())?.toString();
            let rgbGreen = hexToRgb((getRootStyle.getPropertyValue('--green')).trim())?.toString();
            let rgbSky = hexToRgb((getRootStyle.getPropertyValue('--sky')).trim())?.toString();
            let rgbPink = hexToRgb((getRootStyle.getPropertyValue('--pink')).trim())?.toString();
            let rgbWarning = hexToRgb((getRootStyle.getPropertyValue('--warning')).trim())?.toString();
            let rgbDelete = hexToRgb((getRootStyle.getPropertyValue('--delete')).trim())?.toString();
            let rgbReview = hexToRgb((getRootStyle.getPropertyValue('--review')).trim())?.toString();
            let rgbWhite = hexToRgb((getRootStyle.getPropertyValue('--white')).trim())?.toString();
            let rgbBlack = hexToRgb((getRootStyle.getPropertyValue('--black')).trim())?.toString();

            // getRoot.style.setProperty('--main-color-one', hexOne);
            getRoot.style.setProperty('--main-color-one-rgb', rgbOne);
            getRoot.style.setProperty('--main-color-two-rgb', rgbTwo);
            getRoot.style.setProperty('--main-color-three-rgb', rgbThree);
            getRoot.style.setProperty('--primary-rgb', rgbPrimary);
            getRoot.style.setProperty('--secondary-rgb', rgbSecondary);
            getRoot.style.setProperty('--success-rgb', rgbSuccess);
            getRoot.style.setProperty('--danger-rgb', rgbDanger);
            getRoot.style.setProperty('--info-rgb', rgbInfo);
            getRoot.style.setProperty('--dark-rgb', rgbDark);
            getRoot.style.setProperty('--light-rgb', rgbLight);
            getRoot.style.setProperty('--blue-rgb', rgbBlue);
            getRoot.style.setProperty('--purple-rgb', rgbPurple);
            getRoot.style.setProperty('--orange-rgb', rgbOrange);
            getRoot.style.setProperty('--brown-rgb', rgbBrown);
            getRoot.style.setProperty('--green-rgb', rgbGreen);
            getRoot.style.setProperty('--sky-rgb', rgbSky);
            getRoot.style.setProperty('--pink-rgb', rgbPink);
            getRoot.style.setProperty('--warning-rgb', rgbWarning);
            getRoot.style.setProperty('--delete-rgb', rgbDelete);
            getRoot.style.setProperty('--review-rgb', rgbReview);
            getRoot.style.setProperty('--white-rgb', rgbWhite);
            getRoot.style.setProperty('--black-rgb', rgbBlack);
        }

        myFunction_get(getRoot)

        /*========================================
            RGBA Color Code Js end
        ==========================================*/

        /*=================================================
            Find Css root variable for chart js
        ===================================================*/
        // for chart js root variable use in js
        function cssvar(name) {
            return getComputedStyle(document.documentElement).getPropertyValue(name);
        }
        cssvar();


        /*===================================================
           dir Change and Save Local Storage Js
        ======================================================*/

        // saved the direction preference from local storage
        const savedDirection = localStorage.getItem('pageDirection');

        const toggleRtlButton = $('.rtlDirection');
        const toggleLtrButton = $('.ltrDirection');
        // for button direction change
        if(savedDirection === "rtl"){
            toggleRtlButton.trigger('click');
        } else{
            toggleLtrButton.trigger('click');
        }

        directionSelect();
        function directionSelect() {
            const htmlTag = $('html');
            const head = $('head');

            // saved the direction preference from local storage
            if (savedDirection) {
                htmlTag.attr('dir', savedDirection);

                if (savedDirection === 'rtl') {
                    head.append('<link rel="stylesheet" href="assets/css/dashboard_rtl.css" id="appendRtlCss">');
                }
            }

            toggleRtlButton.on('click', function() {
                htmlTag.attr('dir', 'rtl');

                // Remove the previous stylesheet if it exists
                $('#appendRtlCss').remove();

                // Append the RTL stylesheet
                head.append('<link rel="stylesheet" href="assets/css/dashboard_rtl.css" id="appendRtlCss">');

                // Save the new direction preference in local storage
                localStorage.setItem('pageDirection', 'rtl');
            });
            toggleLtrButton.on('click', function() {
                htmlTag.attr('dir', 'ltr');

                // Remove the RTL stylesheet
                $('#appendRtlCss').remove();
                // Save the new direction preference in local storage
                localStorage.setItem('pageDirection', 'ltr');
            });
        }


        /*========================================
           Theme Mode Change Js
        ========================================*/
        // saved the direction preference from local storage
        const savedThemeMode = localStorage.getItem('themeMode');

        const darkThemeButton = $('.darkTheme');
        const lightThemeButton = $('.lightTheme');
        // for button direction change
        if(savedThemeMode === "dark"){
            darkThemeButton.trigger('click');
        } else {
            lightThemeButton.trigger('click');
        }

        themeModeSelect();
        function themeModeSelect() {
            const htmlTag = $('html');
            const head = $('head');

            // saved the direction preference from local storage
            if (savedThemeMode) {
                htmlTag.attr('data-mode', savedThemeMode);

                if (savedThemeMode === 'dark') {
                    head.append('<link rel="stylesheet" href="assets/css/dashboard_dark.css" id="appendDarkCss">');
                }
            }

            darkThemeButton.on('click', function() {
                htmlTag.attr('data-mode', 'dark');

                // Remove the previous stylesheet if it exists
                $('#appendDarkCss').remove();

                // Append the Dark stylesheet
                head.append('<link rel="stylesheet" href="assets/css/dashboard_dark.css" id="appendDarkCss">');

                // Save the new Mode preference in local storage
                localStorage.setItem('themeMode', 'dark');
            });
            lightThemeButton.on('click', function() {
                htmlTag.attr('data-mode', 'light');

                // Remove the Dark stylesheet
                $('#appendDarkCss').remove();

                // Save the new Mode preference in local storage
                localStorage.setItem('themeMode', 'light');
            });
        }

        /*========================================
           Theme Color Change Js
        ========================================*/
        themeColorSelect();
        function themeColorSelect() {
            const mainColorsButton = $('.mainColors');
            const blueColorsButton = $('.blueColors');
            const purpleColorsButton = $('.purpleColors');
            const orangeColorsButton = $('.orangeColors');
            const brownColorsButton = $('.brownColors');
            const greenColorsButton = $('.greenColors');
            const skyColorsButton = $('.skyColors');
            const pinkColorsButton = $('.pinkColors');
            const htmlTag = $('html');
            const head = $('head');

            // saved the direction preference from local storage
            const savedThemeColor = localStorage.getItem('themeColor');

            if (savedThemeColor) {
                htmlTag.attr('data-color', savedThemeColor);

                head.append('<link rel="stylesheet" href="assets/css/dashboard_colors.css" id="appendColorsCss">');

            }

            mainColorsButton.on('click', function() {
                htmlTag.attr('data-color', 'main');

                // Save the new color preference in local storage
                localStorage.setItem('themeColor', 'main');
            });
            blueColorsButton.on('click', function() {
                htmlTag.attr('data-color', 'blue');

                // Save the blue color preference in local storage
                localStorage.setItem('themeColor', 'blue');
            });
            purpleColorsButton.on('click', function() {
                htmlTag.attr('data-color', 'purple');

                // Save the purple color preference in local storage
                localStorage.setItem('themeColor', 'purple');
            });
            orangeColorsButton.on('click', function() {
                htmlTag.attr('data-color', 'orange');

                // Save the orange color preference in local storage
                localStorage.setItem('themeColor', 'orange');
            });
            brownColorsButton.on('click', function() {
                htmlTag.attr('data-color', 'brown');

                // Save the brown color preference in local storage
                localStorage.setItem('themeColor', 'brown');
            });
            greenColorsButton.on('click', function() {
                htmlTag.attr('data-color', 'green');

                // Save the green color preference in local storage
                localStorage.setItem('themeColor', 'green');
            });
            skyColorsButton.on('click', function() {
                htmlTag.attr('data-color', 'sky');

                // Save the sky color preference in local storage
                localStorage.setItem('themeColor', 'sky');
            });
            pinkColorsButton.on('click', function() {
                htmlTag.attr('data-color', 'pink');

                // Save the pink color preference in local storage
                localStorage.setItem('themeColor', 'pink');
            });
        }

        /*========================================
           Theme Customization Colors Js
        ========================================*/
        $(document).on('click','.customization__contents__colors', function() {
            let colorRoot = document.querySelector(`[data-color="${$(this).attr("data-color-class")}"]`);

            if(colorRoot != null) {
                barChart();
                horizontalBarChart();
                barChartDevice();
                lineChartCustomer();
                doughnutChart();
            }

            lineChartOne();
            lineChartTwo();
            barChartOne();
            barChartTwo();
            doughnutPieOne();
            doughnutPieTwo();
            mixedChartOne();
            scatterChartOne();
            polarAreaChartOne();
            radarChartOne();

            $(this).addClass('selected').siblings().removeClass('selected');
        });

        // data-color class selected
        let dataColor = $("html").attr('data-color');
        if(dataColor.length > 0) {
            setTimeout(function () {
                $("." + dataColor + "Colors").trigger("click");
            }, 500);
        }

        /*========================================
           Theme Customization Js
        ========================================*/
        $(document).on('click','.customization__icon', function(){
            $('.customization').toggleClass('show');
        });

        $(document).on('click','.customization__close', function() {
            $('.customization').removeClass('show');
        });

        /*
        ========================================
            Notification click and view
        ========================================
        */
        $(document).on('click', '.click__notification', function() {
            $(this).addClass('active');
        });
        /*========================================
           Icon Search and Html Copy Js
        ========================================*/
        // only for material icon search and copy
        $(document).on('keyup', '.search_materialIcon', function() {
            let searchIcons = $(this).val();
            let alIconsList = $('.search_materialIcon_wrapper > span');
            $.each(alIconsList, function (index, value){
                let iconTextValue = $(this).text();
                let foundIconText = iconTextValue.toLowerCase().match(searchIcons.toLowerCase().trim());

                if (!foundIconText){
                    $(this).hide();
                }else{
                    $(this).show();
                }
            });
        })

        // for all icon search and copy
        $(document).on('keyup', '.search_iconInput', function() {
            let searchIcons = $(this).val().toLowerCase().trim();
            let alIconsList = $('.search_iconWrapper > i, .search_iconWrapper > span');

            $.each(alIconsList, function(index, value) {
              let iconClassValue = $(this).attr('class').toLowerCase();

              if (!iconClassValue.includes(searchIcons)) {
                $(this).hide();
              } else {
                $(this).show();
              }
            });
        });
        // for icon html copy and hover
        $(document).on('mouseenter', '.search_iconWrapper > i, .search_iconWrapper > span, .search_materialIcon_wrapper > span', function() {
            // Add tooltip for copying the HTML code
            $(this).attr('title', 'Copy this code');
        });

        $(document).on('click', '.search_iconWrapper > i, .search_iconWrapper > span, .search_materialIcon_wrapper > span', function() {
            // remove this attribute title
            $(this).removeAttr('title');

            // Get the HTML code of the clicked icon
            let iconHtml = $(this)[0].outerHTML;
            // Copy the HTML code to the clipboard
            copyToClipboard(iconHtml);
            // Provide visual feedback to the user

            $(this).addClass('copied');
            setTimeout(function() {
              $('.search_iconWrapper > i, .search_iconWrapper > span, .search_materialIcon_wrapper > span').removeClass('copied');
            }, 1000);

        });

        $(document).on('mouseleave', '.search_iconWrapper > i, .search_iconWrapper > span, .search_materialIcon_wrapper > span', function() {
            // Remove tooltip when cursor leaves the icon
            $(this).removeAttr('title');
        });

        function copyToClipboard(text) {
            const tempInput = $('<input>');
            $('body').append(tempInput);
            tempInput.val(text).select();
            document.execCommand('copy');
            tempInput.remove();
        }

        /*========================================
           Popover Js
        ========================================*/
        const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
        const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

        /*========================================
           Tooltip Js
        ========================================*/
        const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
        const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

        /*========================================
           Sidebar Search List Js
        ========================================*/
        $(document).on('keyup','#search_sidebarList',function (){
            let searchValues = $(this).val().toLowerCase();
            let allList = $('.dashboard__bottom__list li');// get list from navbar
            let activeValue = []; // declare a variable for storing temp value

            if($(this).val().length > 0){
                $.each(allList,function (index,value) {
                    let currentEl = $(this);
                    let textValue = currentEl.text();
                    let searchValue = searchValues.toLowerCase().trim();
                    currentEl.show();
                    currentEl.find("> a").attr("style", "font-weight: bold");
                    let foundText = textValue.toLowerCase().includes(searchValue); // check the given input value is exist on this value or not if not then hide
                    if (!foundText){
                        currentEl.find("> a").removeAttr("style")
                        currentEl.hide();
                    }else{
                        // let decide if li have then do not hide show all li a
                        // check if current element have submenu then store it into activeValue array this array will help you to show all the children after this loop
                        if(currentEl.find('.submenu').length > 0){
                            activeValue.push({
                                value: searchValue,
                                el: currentEl
                            })
                        }
                    }
                });

                $('.dashboard__bottom__list li').each(function (){
                    if($(this).hasClass("has-children")){
                        $(this).removeClass("open show");
                    }
                });

                // run loop for checking submenu and li
                activeValue.forEach(function (value, index) {
                    // check if current element have children then show them
                    value.el.find(".submenu li").each(function (){
                        let item = $(this).text();
                        let foundText = item.toLowerCase().includes(value.value);

                        if(foundText){
                            $(this).show();// show single
                            $(this).closest('.submenu').parent().addClass("open show");
                        }else{
                            $(this).hide();
                        }
                    });
                });

            }else{
                $('.dashboard__bottom__list li').each(function (){
                    if($(this).hasClass("has-children")){
                        $(this).removeClass("open show");
                    }

                    $(this).show();
                });

                $('.dashboard__bottom__list li.active').addClass("open show");
            }
        });


        /*========================================
           Search & Find Item Js
        ==========================================*/
        document.addEventListener('keyup', (event) => {
            if (event.target.classList.contains('search_inputList')) {
              let searchValues = event.target.value;
              let allEmployeeList = document.querySelectorAll('.findTextList');
              allEmployeeList.forEach((elementValue, index) => {
                let textValue = elementValue.textContent;
                let foundText = textValue.toLowerCase().match(searchValues.toLowerCase().trim());
                if (!foundText) {
                  elementValue.closest("tr, .findTextWrap").style.display = "none";
                } else {
                  elementValue.closest("tr, .findTextWrap").style.display = "";
                }
              });
            }
        });

        /*========================================
        	Recent Activities show hide js
        ==========================================*/
        $(document).on('click','#activity_btn', function() {
            let activityBtn = $(this);
            activityBtn.toggleClass('showActivity');

            if(activityBtn.hasClass('showActivity')) {
                $('.dashboard__recentActivities').addClass('showActivity');
            }else{
                $('.dashboard__recentActivities').removeClass('showActivity');
            }
        });

        $(document).on('click', '.dashboard__recentActivities__close', function() {
            $('.dashboard__recentActivities').removeClass('showActivity');
            $('#activity_btn').removeClass('showActivity');
        });

        /*
        ========================================
            sidebar open close js
        ========================================
        */
        let iconBar = document.querySelector('.dashboard__sidebarIcon');
        let sidebarWrapper = document.querySelector('.dashboard__contents__wrapper');
        if(iconBar != null) {
            iconBar.addEventListener('click', () => {
                sidebarWrapper.classList.toggle('icon__view');
            })
        }

        /*
        ========================================
            Dashboard Responsive Sidebar
        ========================================
        */
        $(document).on('click', '.close__barIcon, .body-overlay', function() {
            $('.dashboard__leftContent, .body-overlay').removeClass('active');
        });
        $(document).on('click', '.sidebar_mobileIcon', function() {
            $('.dashboard__leftContent, .body-overlay').addClass('active');
        });

        /*
        ========================================
            Dashboard Dropdown Side Menu
        ========================================
        */
        $(document).on('click', '.dashboard__list .has-children a', function(e) {
            var db = $(this).parent('.has-children');
            if (db.hasClass('open')) {
                db.removeClass('open');
                db.find('.submenu').children('.has-children').removeClass("open"); //2nd children remove
                db.find('.submenu').removeClass('open');
                db.find('.submenu').slideUp(300);
            } else {
                db.addClass('open');
                db.children('.submenu').slideDown(300);
                db.siblings('.has-children').children('.submenu').slideUp(300);
                db.siblings('.has-children').removeClass('open');
            }
        });

        $(document).on('click', '.icon__view .dashboard__list .has-children > a', function(e) {
            e.preventDefault()
        });


        /*
        ========================================
            SearchBar
        ========================================
        */
        let searchClose = document.querySelector('.search__wrapper__close');
        let searchOpen = document.querySelector('.search__click');
        let searchBar = document.querySelector('.search__wrapper');
        if(searchClose != null) {
            searchClose.addEventListener('click', () => {
                searchBar.classList.remove('active');
            })
        }
        if(searchOpen != null) {
            searchOpen.addEventListener('click', () => {
                searchBar.classList.toggle('active');
            })
        }

        /*
        ========================================
            Btn Hover Js
        ========================================
        */
        $(".cmn_btn").append("<b></b>");
        $(".cmn_btn")
        .on("mouseout", function (r) {
            let btnOffset = $(this).offset(),
                btnX = r.pageX - btnOffset.left,
                btnY = r.pageY - btnOffset.top;
            $(this).find("b").css({
                top: btnY,
                left: btnX,
            });
        })
        .on("mouseenter", function (r) {
            let btnOffset = $(this).offset(),
            btnX = r.pageX - btnOffset.left,
            btnY = r.pageY - btnOffset.top;
            $(this).find("b").css({
                top: btnY,
                left: btnX,
            });
        });

         /*
        ========================================
           Job Post Custom Switch Js
        ========================================
        */
        $(document).on('click', '.click_switch', function() {
            let currentSwitch = $(this);
            let switchParent = $('.switchParent');
            let replaceText = switchParent.find('.replaceText');
            let currentReplaceText = currentSwitch.closest(switchParent).find(replaceText);
            let parentWrapper = currentSwitch.closest('.storeHour_parent');

            if (currentSwitch.is(":checked")) {
                currentSwitch.attr("checked", true);
                currentReplaceText.text($(this).attr("data-checked"));

                parentWrapper.find('.form--control').prop("disabled", false); // date input enable

                parentWrapper.find('.storeHourDate').removeClass('disabled'); // store Hours date input enable

            } else {
                currentSwitch.attr("checked", false);
                currentReplaceText.text($(this).attr("data-unchecked"));

                parentWrapper.find('.form--control').prop("disabled", true);  // date input disabled

                parentWrapper.find('.storeHourDate').addClass("disabled"); // store Hours date input disabled


            }
        });

        /*
        ========================================
           Choose New or Existing Staff Js
        ========================================
        */
        $(document).on('click','.chooseExisting_staff',  function() {
            $(this).addClass('cmn_btn').removeClass('outline_btn');
            $('.addNew_staff').addClass('outline_btn');

            $('.chooseExistingStaff__view').addClass('show');
            $('.addStaff__view').removeClass('show');
        })

        $(document).on('click','.addNew_staff',  function() {
            $(this).addClass('cmn_btn').removeClass('outline_btn');
            $('.chooseExisting_staff').addClass('outline_btn');

            $('.addStaff__view').addClass('show');
            $('.chooseExistingStaff__view').removeClass('show');
        })

         /*
        ========================================
           Back Previous page Js
        ========================================
        */
        $(document).on('click', '.backPrevious_page', ()=> {
            window.history.back();
        })

        /*========================================
            wow js init
        ========================================*/
        new WOW().init();

        /*
        ========================================
            Chat Responsive Sidebar Css
        ========================================
        */
        $(document).on('click', '.close_chat, .body-overlay', function() {
            $('.chat_wrapper__contact__close, .body-overlay').removeClass('active');
        });
        $(document).on('click', '.chat_sidebar', function() {
            $('.chat_wrapper__contact__close, .body-overlay').addClass('active');
        });

        /*
        ========================================
            Chat Click and Active Class
        ========================================
        */
        $(document).on('click', '.chat_item', function() {
            $(this).addClass('active').siblings().removeClass('active');
            $('.chat_wrapper__contact__close, .body-overlay').removeClass('active');
        });

        /*
        ========================================
            Form Validation js
        ========================================
        */
        const setupFormValidation = () => {
            const validateInput = (input) => {
                const validationInput = input;
                const validationInputValue = validationInput.val().trim();
                const formInputGroup = validationInput.closest('.form__input__single');
                const isEmailField = validationInput.attr('type') === 'email';
                const isPasswordField = validationInput.attr('type') === 'password';

                if (validationInputValue === "") {
                    formInputGroup.addClass('is-invalid').removeClass('is-valid');
                    formInputGroup.find('.validation__text').text('This field is required!');
                } else if (isEmailField && !isValidEmail(validationInputValue)) {
                    formInputGroup.addClass('is-invalid').removeClass('is-valid');
                    formInputGroup.find('.validation__text').text('Invalid email address!');
                } else if (isPasswordField && validationInputValue.length < 8) {
                    formInputGroup.addClass('is-invalid').removeClass('is-valid');
                    formInputGroup.find('.validation__text').text('Password must be at least 8 characters long!');
                } else {
                    formInputGroup.addClass('is-valid').removeClass('is-invalid');
                    formInputGroup.find('.validation__text').text('This field is valid');
                }
            };

            const isValidEmail = (email) => {
                const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                return emailRegex.test(email);
            };

            $(document).on('click','.validationBtn', (e) => {
                e.preventDefault();
                const formValidation = $(e.currentTarget).closest('.validateForm');
                const inputs = formValidation.find('.form__input__single input');
                inputs.each((index, element) => {
                validateInput($(element));
                });
                // Additional form submission logic if needed
            });

            $('.validateForm input').on('input', (e) => {
                validateInput($(e.currentTarget));
            });
        };

        setupFormValidation();

        /*
        ========================================
            Attach File js
        ========================================
        */
        document.querySelectorAll('.uploadedWrapper').forEach((uploadWrap) => {
            const inputTag = uploadWrap.querySelector(".inputTag");
            const uploadImage = uploadWrap.querySelector(".uploadImage");
            let previousFilenames = uploadImage.innerText;

            if (inputTag != null) {
                inputTag.addEventListener('input', (event) => {
                    const inputTagFiles = inputTag.files;
                    const newFilenames = Array.from(inputTagFiles, file => file.name).join(", ");

                    if(previousFilenames === newFilenames) {
                        alert('This file is already uploaded');
                    }

                    if (newFilenames !== "") {
                        uploadImage.innerText = newFilenames;
                        previousFilenames = newFilenames;
                    } else {
                        uploadImage.innerText = previousFilenames;
                    }
                });
            }
        });

        /*
        ========================================
            Multiple File uploads
        ========================================
        */
        document.querySelectorAll('.uploadedFileWrapper').forEach((uploadFileWrap) => {
            const fileTag = uploadFileWrap.querySelector(".inputFileTag");
            const uploadedFile = uploadFileWrap.querySelector(".uploadedFile");
            let existingFileNames = new Set();

            if (fileTag) {
              fileTag.addEventListener('change', () => {
                Array.from(fileTag.files).forEach(file => {
                  if (!existingFileNames.has(file.name)) {
                    const uploadFileDiv = createFileDiv(file.name);
                    uploadedFile.appendChild(uploadFileDiv);
                    existingFileNames.add(file.name);
                  } else {
                    window.alert(`The file "${file.name}" has already been uploaded.`);
                  }
                });
                // Reset the file input to allow re-uploading of the same file
                fileTag.value = '';
              });
            }

            const createFileDiv = (fileName) => {
              const uploadFileDiv = document.createElement('div');
              uploadFileDiv.classList.add('fileItem__box');

              const filePara = document.createElement('p');
              filePara.classList.add('fileItem__box__para');
              filePara.innerText = fileName;

              const fileClose = document.createElement('div');
              fileClose.classList.add('fileItem__box__close');
              fileClose.addEventListener('click', () => {
                uploadFileDiv.remove();
                existingFileNames.delete(fileName);
                // Create a new file input element after removing a file
                fileTag.type = 'text';
                fileTag.type = 'file';
              });

              uploadFileDiv.appendChild(filePara);
              uploadFileDiv.appendChild(fileClose);

              return uploadFileDiv;
            };
        });

        /*
        ========================================
            Upload Single Image & Replace
        ========================================
        */
        document.querySelectorAll('.uploadedWrapperView').forEach((uploadWrapView) => {
            const inputTagView = uploadWrapView.querySelector('.inputTagView');
            const uploadImageView = uploadWrapView.querySelector('.uploadImageView');
            let previousFilesView = null;

            if (inputTagView != null) {
                inputTagView.addEventListener('change', handleFiles);
            }

            function handleFiles(e) {
                const inputTagFilesView = e.target.files;

                // Check if no files are selected
                if (inputTagFilesView.length === 0) {
                    alert('Please select an image file.');
                    return;
                }

                // Filter image files
                const imageFiles = Array.from(inputTagFilesView).filter(file => file.type.startsWith('image/'));

                // Check if no image files are selected
                if (imageFiles.length === 0) {
                    alert('Please select an image file.');
                    return;
            }

            previousFilesView = imageFiles;
                renderFiles();
            }

            function renderFiles() {
                uploadImageView.innerHTML = ''; // Clear the image container

                // Render previous files
                if (previousFilesView !== null) {
                    Array.from(previousFilesView).forEach((file) => {
                        const readerView = new FileReader();

                        readerView.onload = (e) => {
                            const divView = document.createElement('div');
                            divView.className = 'uploadImageView_item';

                            const imgView = document.createElement('img');
                            imgView.className = 'uploadImageView_item__thumb';
                            imgView.src = e.target.result;

                            divView.appendChild(imgView);
                            uploadImageView.appendChild(divView);
                        };

                        readerView.readAsDataURL(file);
                    });
                }
            }
        });

        /*
        ========================================
            Upload Multiple Images
        ========================================
        */
        document.querySelectorAll('.uploadWrapMultiple').forEach((uploadWrapView) => {
            const inputTagMultiple = uploadWrapView.querySelector('.inputTagMultiple');
            const uploadMultiple = uploadWrapView.querySelector('.uploadMultiple');
            let uploadedFiles = []; // Array to store the uploaded files

            if (inputTagMultiple != null) {
              inputTagMultiple.addEventListener('change', handleFiles);
              inputTagMultiple.setAttribute('multiple', 'multiple'); // Enable multiple file selection
            }

            function handleFiles(e) {
                const inputTagMultipleFilesView = e.target.files;
                const filesArray = Array.from(inputTagMultipleFilesView);

                filesArray.forEach((file) => {
                    // Check if the file type is an image
                    if (file.type.startsWith('image/')) {
                        // Check if the file is already uploaded
                        const isDuplicate = uploadedFiles.some((uploadedFile) => {
                            return uploadedFile.name === file.name && uploadedFile.size === file.size;
                        });

                        if (!isDuplicate) {
                            const readerView = new FileReader();

                            readerView.onload = (event) => {
                            const divView = document.createElement('div');
                            divView.classList.add('fileUploads__multiple__item');

                            const closeImgView = document.createElement('div');
                            closeImgView.classList.add('fileUploads__multiple__close');

                            const imgView = document.createElement('img');
                            imgView.classList.add('fileUploads__multiple__item__thumb');
                            imgView.src = event.target.result;

                            // Set a unique identifier to the image element
                            divView.dataset.fileName = file.name;

                            divView.appendChild(closeImgView);
                            divView.appendChild(imgView);

                            uploadMultiple.appendChild(divView);

                            uploadedFiles.push(file);
                            };

                            readerView.readAsDataURL(file);
                        } else {
                            // Display alert for duplicate image
                            window.alert(`The image "${file.name}" has already been uploaded.`);
                        }
                    }
                });

                // Clear the file input value to allow selecting the same file again
                e.target.value = '';
            }

            uploadMultiple.addEventListener('click', (event) => {
              const closeButton = event.target.closest('.fileUploads__multiple__close');
              if (closeButton) {
                const itemClose = closeButton.closest('.fileUploads__multiple__item');
                if (itemClose) {
                  const fileName = itemClose.dataset.fileName;
                  itemClose.remove();
                  removeUploadedFile(fileName);
                }
              }
            });

            function removeUploadedFile(fileName) {
              uploadedFiles = uploadedFiles.filter((file) => file.name !== fileName);
            }
        });

        /*
        ==================================================
            Drag & Drop Image Uploads Js
        ==================================================
        */
        const dragDropImages = document.querySelectorAll('.dragDroparea');
        // Iterate over each drag and drop area
        dragDropImages.forEach((dragDropImage) => {
            // Add event listeners for drag events
            dragDropImage.addEventListener('dragover', handleDragOver);
            dragDropImage.addEventListener('dragenter', handleDragEnter);
            dragDropImage.addEventListener('dragleave', handleDragLeave);
            dragDropImage.addEventListener('drop', handleDrop);

            // Add event listener for change event on the file input element
            dragDropImage.addEventListener('change', handleFileInputChange);

            function handleDragOver(e) {
                e.preventDefault();
                e.stopPropagation();
                dragDropImage.classList.add('drag-over');
            }

            function handleDragEnter(e) {
                e.preventDefault();
                e.stopPropagation();
                dragDropImage.classList.add('drag-over');
            }

            function handleDragLeave(e) {
                e.preventDefault();
                e.stopPropagation();
                dragDropImage.classList.remove('drag-over');
            }

            function handleDrop(e) {
                e.preventDefault();
                e.stopPropagation();
                dragDropImage.classList.remove('drag-over');

                // Get the dropped files
                const files = e.dataTransfer.files;

                // Process the dropped files
                handleFiles(files);
            }

            function handleFileInputChange(e) {
                // Get the selected files
                const files = e.target.files;

                // Process the selected files
                handleFiles(files);
            }

            function handleFiles(files) {
                const dropZonePara = dragDropImage.querySelector('.dragDrop__para');

                // Check if files exist
                if (files.length > 0) {
                    let hasImage = false;

                    // Iterate over the files
                    for (const file of files) {
                        // Check if the file is an image
                        if (!file.type.startsWith('image/')) {
                            alert('Only image files are allowed.');
                            continue;
                        }

                        // Check if the file is already uploaded
                        if (isFileUploaded(file)) {
                            alert('This image is already uploaded.');
                            continue;
                        }

                        // Create an image element for displaying the uploaded file
                        const imgDragDiv = document.createElement('div');
                        imgDragDiv.classList.add('fileUploads__multiple__item');

                        const imgDragDivClose = document.createElement('div');
                        imgDragDivClose.classList.add('fileUploads__multiple__close');

                        const imgDrag = document.createElement('img');
                        imgDrag.src = URL.createObjectURL(file);
                        imgDrag.alt = file.name;

                        // Append the image element to the drop zone
                        imgDragDiv.appendChild(imgDragDivClose);
                        imgDragDiv.appendChild(imgDrag);
                        dragDropImage.appendChild(imgDragDiv);

                        hasImage = true;
                    }

                    // Hide the drop zone paragraph if at least one image is uploaded
                    if (hasImage) {
                        dropZonePara.classList.add('d-none');
                    }
                }

                dragDropImage.addEventListener('click', (event) => {
                    const closeButton = event.target.closest('.fileUploads__multiple__close');
                    if (closeButton) {
                        const itemClose = closeButton.closest('.fileUploads__multiple__item');
                        if (itemClose) {
                            itemClose.remove();
                        }
                    }

                    // Show the drop zone paragraph if no images are uploaded
                    const uploadedFilesItem = dragDropImage.querySelectorAll('.fileUploads__multiple__item');
                    if (uploadedFilesItem.length === 0) {
                        dropZonePara.classList.remove('d-none');
                    }
                });
            }

            function isFileUploaded(file) {
                const uploadedFiles = dragDropImage.querySelectorAll('img');
                for (const uploadedFile of uploadedFiles) {
                    if (uploadedFile.alt === file.name) {
                        return true;
                    }
                }
                return false;
            }
        });

        /*
        ==================================================
            Drag & Drop File Uploads Js
        ==================================================
        */
        // Get all drag and drop areas
        const dragDropFiles = document.querySelectorAll('.dragDropFiles');
        // Iterate over each drag and drop area
        dragDropFiles.forEach((dragDropFile) => {
            // Add event listeners for drag events
            dragDropFile.addEventListener('dragover', handleDragOver);
            dragDropFile.addEventListener('dragenter', handleDragEnter);
            dragDropFile.addEventListener('dragleave', handleDragLeave);
            dragDropFile.addEventListener('drop', handleDrop);

            // Add event listener for change event on the file input element
            dragDropFile.addEventListener('change', handleFileInputChange);

            function handleDragOver(e) {
                e.preventDefault();
                e.stopPropagation();
                dragDropFile.classList.add('drag-over');
            }

            function handleDragEnter(e) {
                e.preventDefault();
                e.stopPropagation();
                dragDropFile.classList.add('drag-over');
            }

            function handleDragLeave(e) {
                e.preventDefault();
                e.stopPropagation();
                dragDropFile.classList.remove('drag-over');
            }

            function handleDrop(e) {
                e.preventDefault();
                e.stopPropagation();
                dragDropFile.classList.remove('drag-over');

                // Get the dropped files
                const files = e.dataTransfer.files;

                // Process the dropped files
                handleFiles(files);
            }

            function handleFileInputChange(e) {
                // Get the selected files
                const files = e.target.files;

                // Process the selected files
                handleFiles(files);
            }

            function handleFiles(files) {
                const dropZonePara = dragDropFile.querySelector('.dragDrop__para');

                // Check if files exist
                if (files.length > 0) {
                    let existingFileNames = new Set();

                    // Iterate over the files
                    for (const file of files) {
                        // Check if the file is already uploaded
                        if (isFileUploaded(file)) {
                            alert('This File is already uploaded.');
                            continue;
                        }

                        if (!existingFileNames.has(file.name)) {
                            const uploadFileDiv = createFileDiv(file.name);
                            dragDropFile.appendChild(uploadFileDiv);
                            existingFileNames.add(file.name);
                        } else {
                            window.alert(`The file "${file.name}" has already been uploaded.`);
                        }
                    }

                    // Hide the drop zone paragraph if at least one file is uploaded
                    dropZonePara.classList.add('d-none');
                }

                dragDropFile.addEventListener('click', (event) => {
                    const closeButton = event.target.closest('.fileItem__box__close');
                    if (closeButton) {
                        const itemClose = closeButton.closest('.fileItem__box');
                        if (itemClose) {
                            itemClose.remove();
                        }
                    }

                    // Show the drop zone paragraph if no files are uploaded
                    const uploadedFilesItem = dragDropFile.querySelectorAll('.fileItem__box');
                    if (uploadedFilesItem.length === 0) {
                        dropZonePara.classList.remove('d-none');
                    }
                });
            }

            function isFileUploaded(file) {
                const uploadedFiles = dragDropFile.querySelectorAll('.fileItem__box__para');
                for (const uploadedFile of uploadedFiles) {
                    if (uploadedFile.innerText === file.name) {
                        return true;
                    }
                }
                return false;
            }

            function createFileDiv(fileName) {
                const uploadFileDiv = document.createElement('div');
                uploadFileDiv.classList.add('fileItem__box');

                const filePara = document.createElement('p');
                filePara.classList.add('fileItem__box__para');
                filePara.innerText = fileName;

                const fileClose = document.createElement('div');
                fileClose.classList.add('fileItem__box__close');
                fileClose.addEventListener('click', () => {
                    uploadFileDiv.remove();
                });

                uploadFileDiv.appendChild(filePara);
                uploadFileDiv.appendChild(fileClose);

                return uploadFileDiv;
            }
        });

        /*========================================
            Select tag js
        ========================================*/
        $(document).on("click", ".listItem", function() {
            // $(this).siblings().removeClass("active");
            $(this).toggleClass("active");
        });

        /*
        ========================================
            Password Show Hide On Click
        ========================================
        */
        $(document).on("click", ".toggle_password", function(e) {
            e.preventDefault();
            let inputPass = $(this).parent().find("input");
            if (inputPass.attr("type") === "password") {
                inputPass.attr("type", "text");
                $(this).children().addClass('fa-eye').removeClass('fa-eye-slash');
            } else {
                inputPass.attr("type", "password");
                $(this).children().addClass('fa-eye-slash').removeClass('fa-eye');
            }
        });
        /*========================================
            Select2 Js
        ========================================*/
        $('.select2_editStaff').select2({
            dropdownParent: $('#editStaff')
        });
        $('.select2_addStaff').select2({
            dropdownParent: $('#addStaff')
        });
        $('.select2_comissionedit').select2({
            dropdownParent: $('#comissionedit')
        });
        $('.select2_texDeduction').select2({
            dropdownParent: $('#texDeduction')
        });
        $('.select2_inventoryProduct_one').select2({
            dropdownParent: $('#inventoryProduct_one')
        });
        $('.select2_paymentStatus').select2({
            dropdownParent: $('#paymentStatus')
        });
        $('.select2_addEmployee').select2({
            dropdownParent: $('#addEmployee, #editEmployee')
        });
        $('.select2_gender').select2({
            dropdownParent: $('#addEmployee, #editEmployee')
        });
        $('.select2_status').select2({
            dropdownParent: $('#addEmployee, #editEmployee')
        });

        $('.select2_activation').select2();

        // Select2 style one
        $('.select2_one').select2({
            // dropdownCssClass: "select2_one",
            theme: "one",
        });
        // Select2 style Two
        $('.select2_two').select2({
            // dropdownCssClass: "select2_two",
            theme: "two",
        });
        // Select2 style Three
        $('.select2_three').select2({
            // dropdownCssClass: "select2_three",
            theme: "three",
        });
        // Select2 style Four
        $('.select2_four').select2({
            // dropdownCssClass: "select2_four",
            theme: "four",
        });
        // Select2 style Five
        $('.select2_five').select2({
            // dropdownCssClass: "select2_five",
            theme: "five",
        });

        /*
        ========================================
            Inventory Product Modal arrow js
        ========================================
        */
       $(document).on('click', '.modal , .btn-close', function() {
        $('.productDetails_click').removeClass('show');
       });

       $(document).on('click', '.productDetails_click', function() {
        $(this).addClass('show');
       });
        /*
        ========================================
            Product Quantity js
        ========================================
        */
        $(document).on('click', '.plus', function() {
            var selectedInput = $(this).parent().find('.product__quantity__input');
            // if (selectedInput.val() < 50) {
            selectedInput[0].stepUp(1);
            // }
        });
        $(document).on('click', '.substract', function() {
            var selectedInput = $(this).parent().find('.product__quantity__input');
            if (selectedInput.val() > 1) {
                selectedInput[0].stepDown(1);
            }
        });

        /*
        ========================================
            Flatpickr Js
        ========================================
        */
        $('.flatpickr_calendar').flatpickr({
            altFormat: "invisible",
            // altInput: false,
            inline: true,
        });

        // flatpickr Time
        $('.flatpickr_timeOne').flatpickr({
            enableTime: true,
            noCalendar: true,
            dateFormat: "H:i K",
            // time_24hr: true,
            defaultDate: "10:30 AM",
        });
        $('.flatpickr_timeTwo').flatpickr({
            enableTime: true,
            noCalendar: true,
            dateFormat: "H:i K",
            time_24hr: true,
            defaultDate: "07:30 PM",
        });
        // flatpickr Date
        $('.flatpickr_dateOne').flatpickr({
            enableTime: false,
            dateFormat: "d-m-Y",
        });
        $('.flatpickr_dateTwo').flatpickr({
            enableTime: false,
            dateFormat: "d-m-Y",
        });

        // flatpickr date time

        $('.flatpickr_dateTime').flatpickr({
            // dateFormat: "d-m-Y",
            enableTime: true,
            // dateFormat: "H:i K",
            time_24hr: true,
        });

        /*
        ========================================
            Tab
        ========================================
        */
        $(document).on('click', 'ul.tabs li', function() {
            var tab_id = $(this).attr('data-tab');

            $('ul.tabs li').removeClass('active');
            $('.tab_content_item').removeClass('active');

            $(this).addClass('active');
            $("#" + tab_id).addClass('active');
        });

        /*
        ========================================
           Inbox Message Menu dropdown
        ========================================
        */
        $(document).on('click','.inbox_sidebar__list__item.has-children > a', function(e) {
            let inboxMenu = $(this).closest('.has-children');
            if (inboxMenu.hasClass('open')) {
                inboxMenu.removeClass('open');
                inboxMenu.find('.submenu').slideUp(300);
                inboxMenu.find('.submenu').children('.has-children').removeClass('open'); //2nd children remove
            } else {
                inboxMenu.addClass('open');
                inboxMenu.children('.submenu').slideDown(300);
                inboxMenu.siblings().find('.submenu').slideUp(300);
            }
        });
        /*
        ========================================
           Category Menu dropdown
        ========================================
        */
        $(document).on('click','.category__menu .has-children > a', function(e) {
            let catMenu = $(this).closest('.has-children');
            if (catMenu.hasClass('open')) {
                catMenu.removeClass('open');
                catMenu.find('.submenu').slideUp(300);
                catMenu.find('.submenu').children('.has-children').removeClass('open'); //2nd children remove
            } else {
                catMenu.addClass('open');
                catMenu.children('.submenu').slideDown(300);
                catMenu.siblings().find('.submenu').slideUp(300);
            }
        });

        $(document).on('click', '.category__nav', function() {
            let cateSlide = $(this).closest('.category__parent').find('.category__menu');
            cateSlide.slideToggle();

            // if(cateSlide.hasClass('d-none')) {
            //     cateSlide.removeClass('d-none');
            // }
        })

        /*
        ========================================
           Filter Result Js
        ========================================
        */
        $(document).on( 'click', '.search_filter__btn', function() {
            let filterBtn = $(this);
            let filterContents = filterBtn.closest('.search_filter').find('.search_filter__contents');
            filterBtn.toggleClass('active')
            filterContents.slideToggle();
        });

        /*
        ========================================
            Click and Delete js
        ========================================
        */
        $(document).on("click", ".delete_item", function(e) {
            e.preventDefault();
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    )
                }
            });
        });

        /*
        ========================================
            Click and Check All Item
        ========================================
        */
        $(document).on("click", ".checkAll", function() {
            let checkAll = $(this);
            let checkSingle = checkAll.closest('.inbox_wrapper, table').find('.checkSingle');

            if (checkAll.is(':checked')) {
                checkSingle.prop('checked', true);
            } else {
                checkSingle.prop('checked', false);
            }

            // Bulk Action hide show js
            if (checkSingle.is(':checked')) {
                $(".bulkActionSelect").removeClass('d-none').addClass('d-inline-block'); // When row check all
            } else {
                $(".bulkActionSelect").addClass('d-none').removeClass('d-inline-block');  // When row check all
            }

        });

        $(document).on("click", ".checkSingle", function() {
            let inboxWrapper = $(this).closest('.inbox_wrapper, table');
            let checkAll = inboxWrapper.find('.checkAll');
            let checkSingle = inboxWrapper.find('.checkSingle');

            if (!$(this).is(':checked')) {
                checkAll.prop('checked', false);
            } else {
                if (checkSingle.not(':checked').length === 0) {
                    checkAll.prop('checked', true);
                }
            }

            // Bulk Action hide show js
            if (checkSingle.is(':checked')) {
                $(".bulkActionSelect").removeClass('d-none').addClass('d-inline-block'); // When row check all
            } else if (checkSingle.not(':checked').length === 0) {
                $(".bulkActionSelect").addClass('d-none').removeClass('d-inline-block');  // When row check all
            } else  {
                $(".bulkActionSelect").addClass('d-none').removeClass('d-inline-block');  // When row check all
            }

        });

        /*
        ========================================
            Click Value Add
        ========================================
        */
        $(document).on('click', '.valueInput__list li', function(event) {
            let el = $(this);
            let value = el.data('value');
            let parentWrap = el.parent().parent();
            el.addClass('active');
            el.siblings().removeClass('active');
            parentWrap.find('.value-size').val(value);

        });
        /*
        ========================================
            Click Scan code and focus input
        ========================================
        */
        $(document).on('click', '.dashboard_posSystem__header__scan__code', function() {
            $(this).closest('.dashboard_posSystem__header__scan').find('.dashboard_posSystem__header__scan__input input').focus();
        });

        /*
        ========================================
            Payment Card active class
        ========================================
        */
        $(document).on('click', '.single_click', function() {
            $(this).toggleClass("active").siblings().removeClass("active");

            if($('.paymentMethod__type__item').is('.active')) {
                $('.paymentMethod__scanner').removeClass('d-none');
            }else {
                $('.paymentMethod__scanner').addClass('d-none')
            }
        });

        /*
        ========================================
            input search open item
        ========================================
        */
        $(document).on('keyup change', '.keyupInput', function(event) {

            let input_values = $(this).val();

            if (input_values.length > 0) {
                $(this).closest('.searchParent').find('.searchWrap').addClass("d-block");
                $(this).closest('.searchParent').find('.searchWrap').removeClass("d-none");
                $('.body-overlay').addClass('show');
            }
            else {
                $(this).closest('.searchParent').find('.searchWrap').removeClass("d-block");
                $(this).closest('.searchParent').find('.searchWrap').addClass("d-none");
                $('.body-overlay').removeClass('show');
            }
        });

        $(document).on('click', '.body-overlay', function(){
            $(this).removeClass('show');
            $('.searchParent').find('.searchWrap').addClass("d-none");
            $('.keyupInput').val('');
        });

        var div_scroll = function () {
            // setTimeout(function () {
              let mainHeight = $(".scrollWrap").height();
              let innerHeight = $(".scrollWrap__inner").height();
              if (innerHeight > mainHeight) {
                $(".scrollWrap").css("overflow-y", "auto");
              } else {
                $(".scrollWrap").css("overflow-y", "hidden");
              }
            // }, 500);
        };

        div_scroll();
        $(window).on("resize", function () {
            div_scroll();
        });

        /*
        ========================================
            Product Add Js
        ========================================
        */
        let Listings = document.querySelectorAll(".new_stepForm_list li");
        let ListingsLength = Listings.length;
        let sections = document.querySelectorAll(".new_stepForm_contents");
        let nextButton = document.querySelector("#next");
        let prevButton = document.querySelector("#previous");
        var removeStepBtn = document.querySelector("#removeStepBtn");
        let current = 0;

        const toggleListings = () => {
            Listings.forEach(function(e) {
                e.classList.remove('running');
            });
            Listings[current].classList.add("running");
            Listings[current].classList.remove("completed");
            if (current != 0) {
                Listings[current - 1].classList.add("completed");
            }
        }

        const toggleSections = () => {
            sections.forEach(function(section) {
                section.classList.add("d-none");
                section.classList.remove("d-block");
            });
            sections[current].classList.remove("d-none");
            sections[current].classList.add("d-block");
        }
        // if (nextButton != null) {
        if (nextButton) {
            nextButton.addEventListener("click", function(e) {
                if(current === ListingsLength - 2) {
                    removeStepBtn.classList.add("d-none");
                }
                if (current < Listings.length - 1) {
                    current++
                    prevButton.classList.remove("d-none");
                }
                toggleListings();
                toggleSections();

            })
        }
        // if (prevButton != null) {
        if (prevButton) {
            prevButton.classList.add("d-none");
            prevButton.addEventListener("click", function(e) {
                if (current > 0) {
                    current--
                }
                if (current === 0) {
                    prevButton.classList.add("d-none");

                }

                toggleListings();
                toggleSections();
            });
        }

        /*
        ========================================
            Popup Modal js
        ========================================
        */
       // Normal Modal
        $(document).on('click', '.popup_overlay, .popup_close, .popup__save', function() {
            $('.popup_overlay').remove();
            $('.modal_normal__fixed').removeClass('popup_show');
        });
        $(document).on('click', '.modal_normal', function() {
            $('body').append('<div class="popup_overlay"></div>');
            $('.modal_normal__fixed').toggleClass('popup_show');
        });

        //modal Full Screen
        $(document).on('click', '.popup_overlay, .popup_close, .popup__save', function() {
            $('.popup_overlay').remove();
            $('.modal_fullscreen__fixed').removeClass('popup_show');
        });
        $(document).on('click', '.modal_fullscreen', function() {
            $('body').append('<div class="popup_overlay"></div>');
            $('.modal_fullscreen__fixed').toggleClass('popup_show');
        });
        //modal Extra Large
        $(document).on('click', '.popup_overlay, .popup_close, .popup__save', function() {
            $('.popup_overlay').remove();
            $('.modal_xl__fixed').removeClass('popup_show');
        });
        $(document).on('click', '.modal_xl', function() {
            $('body').append('<div class="popup_overlay"></div>');
            $('.modal_xl__fixed').toggleClass('popup_show');
        });
        //modal Large
        $(document).on('click', '.popup_overlay, .popup_close, .popup__save', function() {
            $('.popup_overlay').remove();
            $('.modal_lg__fixed').removeClass('popup_show');
        });
        $(document).on('click', '.modal_lg', function() {
            $('body').append('<div class="popup_overlay"></div>');
            $('.modal_lg__fixed').toggleClass('popup_show');
        });
        //modal Small
        $(document).on('click', '.popup_overlay, .popup_close, .popup__save', function() {
            $('.popup_overlay').remove();
            $('.modal_small__fixed').removeClass('popup_show');
        });
        $(document).on('click', '.modal_small', function() {
            $('body').append('<div class="popup_overlay"></div>');
            $('.modal_small__fixed').toggleClass('popup_show');
        });
        //modal Backdrop
        $(document).on('click', '.popup_close, .popup__save', function() {
            $('.popup_overlay_backdrop').remove();
            $('.modal_backdrop__fixed').removeClass('popup_show');
        });
        $(document).on('click', '.modal_backdrop', function() {
            $('body').append('<div class="popup_overlay_backdrop"></div>');
            $('.modal_backdrop__fixed').toggleClass('popup_show');
        });

        /*
        ========================================
            Click and page reload js
        ========================================
        */
        let pageReloadBtn = document.querySelector('.pageReload');
        if(pageReloadBtn != undefined) {
            let pageReload = () => {
                location.reload();
            }
            pageReloadBtn.addEventListener('click', pageReload);
        }

        /*
        ========================================
            Range Slider Js
        ========================================
        */
        const rangeInput = document.querySelectorAll(".rangeSlider__input input"),
        priceInput = document.querySelectorAll(".rangeSlider__price__input input"),
        range = document.querySelector(".rangeSlider__bar .rangeSlider__bar__progress");
        let priceGap = 1000;

        function updateProgress() {

            const minVal = parseInt(rangeInput[0]?.value),
            maxVal = parseInt(rangeInput[1]?.value);

            if (isNaN(minVal) || isNaN(maxVal)) {
                return;
            }

            if ((maxVal - minVal) < priceGap) {
                if (rangeInput[0] === document.activeElement) {
                    rangeInput[1].value = maxVal + priceGap;
                } else {
                    rangeInput[0].value = minVal - priceGap;
                }
            } else {
                priceInput[0].value = minVal;
                priceInput[1].value = maxVal;

                // Calculate the new position for the progress bar
                const minPosition = ((minVal - rangeInput[0].min) / (rangeInput[0].max - rangeInput[0].min)) * 100;
                const maxPosition = 100 - ((maxVal - rangeInput[1].min) / (rangeInput[1].max - rangeInput[1].min)) * 100;

                if (getComputedStyle(document.documentElement).direction === "rtl") {
                    range.style.right = `${minPosition}%`;
                    range.style.left = `${maxPosition}%`;
                } else {
                    range.style.left = `${minPosition}%`;
                    range.style.right = `${maxPosition}%`;
                }
            }
        }

        // Range input and Price input Progress
        rangeInput.forEach(input => {
            input.addEventListener("input", updateProgress);
        });

        priceInput.forEach(input => {
            input.addEventListener("input", updateProgress);
        });

        // Update progress bar position
        updateProgress();

        /*========================================
            // Pagination Active Class JS
        ========================================*/
        $(document).on('click', '.pagination_item', function() {
            $(this).siblings().removeClass('active');
            $(this).addClass('active');
        });
        /* Next Previous btn Click */
        $(document).on('click', '.pagination_next', function() {
            $(this).parent().find('.pagination_item.active').next('.pagination_item').addClass('active');
            $(this).parent().find('.pagination_item.active').prev('.pagination_item').removeClass('active');

        });
        $(document).on('click', '.pagination_prev', function() {
            $(this).parent().find('.pagination_item.active').prev('.pagination_item').addClass('active');
            $(this).parent().find('.pagination_item.active').next('.pagination_item').removeClass('active');

        });

        /*========================================
            // Custom Modal Js
        ========================================*/
        $(document).on("click", '[data-custommodal]', (evt) => {
            const dataModals = $(evt.currentTarget).data("custommodal");
            $(dataModals).addClass("is-open").append('<div class="custommodal__overlay"></div>');
        });

        $(document).on('click', '[data-close]', (event) => {
            $(event.currentTarget).closest(".custommodal").removeClass("is-open");
            $(event.currentTarget).closest(".custommodal").children(".custommodal__overlay").remove();

        });

        $(document).on('click', '.custommodal__overlay', function() {
            $(this).closest(".custommodal.is-open").removeClass("is-open");
            $(this).remove();
        });

        /*========================================
            // Edit ToDo list
        ========================================*/

        $(document).on('click', '.editToDo', function(e) {
            e.preventDefault();

            let parentToDo = $(this).closest('.dashboard__todo__item');
            parentToDo.toggleClass('show').siblings().removeClass('show');

            let editToDoContents = $('.editToDo__contents');
            editToDoContents.toggleClass('show', parentToDo.hasClass('show'));
        });

        $(document).on('click', '.editToDo__remove', function(e) {
            $('.editToDo__contents, .dashboard__todo__item').removeClass('show');
        });

        /*========================================
            // edit Meeting js
        ========================================*/
        $(document).on('click', '.editMeeting', function() {
            let parentMeeting = $(this).closest('.dashboard__meeting__item');
            parentMeeting.toggleClass('show').siblings().removeClass('show');

            if(parentMeeting.hasClass('show')) {
                $('.editMeeting__contents').addClass('show');
            } else {
                $('.editMeeting__contents').removeClass('show');
            }
        });

        $(document).on('click', '.editMeeting__remove', ()=> {
            $('.editMeeting__contents').removeClass('show');
            $('.dashboard__meeting__item').removeClass('show');
        });

        /*========================================
            // Notification alert remove js
        ========================================*/
        $(document).on('click', '.dashboard__notificationAlert__remove', ()=> {
            $('.dashboard__notificationAlert').fadeOut(150);
            // setTimeout(() => $('.dashboard__notificationAlert').remove(), 100);
        });

        /*========================================
            // Drag & Drop js
        ========================================*/

        const draggingParent = document.querySelectorAll(".draggable__parent");

        if (draggingParent != null) {
            document.addEventListener("dragstart", (e) => {
                e.target.classList.add("is_dragging");
            });

            document.addEventListener("dragend", (e) => {
                e.target.classList.remove("is_dragging");
            });

            draggingParent.forEach((item) => {
                item.addEventListener("dragover", (e) => {
                    const dragging = document.querySelector(".is_dragging");
                    const applyAfter = getNewPosition(item, e.clientY);

                    if (applyAfter) {
                        applyAfter.insertAdjacentElement("afterend", dragging);
                    } else {
                        item.prepend(dragging);
                    }

                    slideItems(item, dragging);
                });
            });

            function getNewPosition(column, posY) {
                const cards = column.querySelectorAll(".draggable__item:not(.is_dragging)");
                let result;

                for (let itemCard of cards) {
                    const box = itemCard.getBoundingClientRect();
                    const boxCenterY = box.y + box.height / 2;

                    if (posY >= boxCenterY) {
                        result = itemCard;
                    }
                }

                return result;
            }

            function slideItems(column, dragging) {
                const cards = column.querySelectorAll(".draggable__item:not(.is_dragging)");
                const draggingIndex = Array.from(cards).indexOf(dragging);

                cards.forEach((card, index) => {
                    const translateY = index < draggingIndex ? "-100%" : "0";
                    card.style.transform = `translateY(${translateY})`;
                });
            }
        }

        /*
        ========================================
            Sweet Alert Js
        ========================================
        */
        $(document).on("click", ".sweetAlert_one", function(ev) {
            ev.preventDefault();
            Swal.fire('Any fool can use a computer')
        });
        $(document).on("click", ".sweetAlert_two", function(ev) {
            ev.preventDefault();
            Swal.fire(
                'The Internet?',
                'That thing is still around?',
                'question'
            )
        });
        $(document).on("click", ".sweetAlert_three", function(ev) {
            ev.preventDefault();
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                footer: '<a href="">Why do I have this issue?</a>'
            })
        });
        $(document).on("click", ".sweetAlert_four", function(ev) {
            ev.preventDefault();
            Swal.fire({
                title: '<strong>HTML <u>example</u></strong>',
                icon: 'info',
                html: 'You can use <b>bold text</b>, ' +
                    '<a href="//sweetalert2.github.io">links</a> ' +
                    'and other HTML tags',
                showCloseButton: true,
                showCancelButton: true,
                focusConfirm: false,
                confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!',
                confirmButtonAriaLabel: 'Thumbs up, great!',
                cancelButtonText: '<i class="fa fa-thumbs-down"></i>',
                cancelButtonAriaLabel: 'Thumbs down'
            })
        });
        $(document).on("click", ".sweetAlert_five", function(ev) {
            ev.preventDefault();
            Swal.fire({
                title: 'Do you want to save the changes?',
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: 'Save',
                denyButtonText: `Don't save`,
            }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                    Swal.fire('Saved!', '', 'success')
                } else if (result.isDenied) {
                    Swal.fire('Changes are not saved', '', 'info')
                }
            })
        });
        $(document).on("click", ".sweetAlert_six", function(ev) {
            ev.preventDefault();
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your work has been saved',
                showConfirmButton: false,
                timer: 1500
            })
        });
        $(document).on("click", ".sweetAlert_seven", function(ev) {
            ev.preventDefault();
            Swal.fire({
                title: 'Custom animation with Animate.css',
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                }
            })
        });
        $(document).on("click", ".sweetAlert_eight", function(ev) {
            ev.preventDefault();
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    )
                }
            })
        });
        $(document).on("click", ".sweetAlert_nine", function(ev) {
            ev.preventDefault();
            const swalWithBootstrapButtons = Swal.mixin({
                customClass: {
                    confirmButton: 'btn btn-success',
                    cancelButton: 'btn btn-danger'
                },
                buttonsStyling: false
            })

            swalWithBootstrapButtons.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes, delete it!',
                cancelButtonText: 'No, cancel!',
                reverseButtons: true
            }).then((result) => {
                if (result.isConfirmed) {
                    swalWithBootstrapButtons.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    )
                } else if (
                    /* Read more about handling dismissals below */
                    result.dismiss === Swal.DismissReason.cancel
                ) {
                    swalWithBootstrapButtons.fire(
                        'Cancelled',
                        'Your imaginary file is safe :)',
                        'error'
                    )
                }
            })
        });
        $(document).on("click", ".sweetAlert_ten", function(ev) {
            ev.preventDefault();
            Swal.fire({
                title: 'Sweet!',
                text: 'Modal with a custom image.',
                imageUrl: 'https://unsplash.it/400/200',
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Custom image',
            })
        });
        $(document).on("click", ".sweetAlert_eleven", function(ev) {
            ev.preventDefault();
            let timerInterval
            Swal.fire({
                title: 'Auto close alert!',
                html: 'I will close in <b></b> milliseconds.',
                timer: 2000,
                timerProgressBar: true,
                didOpen: () => {
                    Swal.showLoading()
                    const b = Swal.getHtmlContainer().querySelector('b')
                    timerInterval = setInterval(() => {
                        b.textContent = Swal.getTimerLeft()
                    }, 100)
                },
                willClose: () => {
                    clearInterval(timerInterval)
                }
            }).then((result) => {
                /* Read more about handling dismissals below */
                if (result.dismiss === Swal.DismissReason.timer) {
                    console.log('I was closed by the timer')
                }
            })
        });
        $(document).on("click", ".sweetAlert_twelve", function(ev) {
            ev.preventDefault();
            let timerInterval
            Swal.fire({
                title: 'Submit your Github username',
                input: 'text',
                inputAttributes: {
                    autocapitalize: 'off'
                },
                showCancelButton: true,
                confirmButtonText: 'Look up',
                showLoaderOnConfirm: true,
                preConfirm: (login) => {
                    return fetch(`//api.github.com/users/${login}`)
                        .then(response => {
                            if (!response.ok) {
                                throw new Error(response.statusText)
                            }
                            return response.json()
                        })
                        .catch(error => {
                            Swal.showValidationMessage(
                                `Request failed: ${error}`
                            )
                        })
                },
                allowOutsideClick: () => !Swal.isLoading()
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        title: `${result.value.login}'s avatar`,
                        imageUrl: result.value.avatar_url
                    })
                }
            })
        });

        /*
        ========================================
            Toastr Js
        ========================================
        */
        // Toastr One
        $(document).on('click', '.toastr_one', function(e) {
            e.preventDefault();
            toastr.info('Are you the 6 fingered man?', 'Toastr One', {
                "closeButton": true,
                "progressBar": true,
                "showEasing": "swing",
                "hideEasing": "linear",
                "showDuration": "400",
                "hideDuration": "200",
                "showMethod": "slideDown",
                "hideMethod": "slideUp",
            });
        });
        //Toastr Two
        $(document).on('click', '.toastr_two', function(e) {
            e.preventDefault();
            toastr.success('Have fun storming the castle!', 'Toastr Two', {
                "closeButton": true,
                "progressBar": true,
                "showEasing": "swing",
                "hideEasing": "linear",
                "showDuration": "400",
                "hideDuration": "200",
                "showMethod": "slideDown",
                "hideMethod": "slideUp",
            });
        });
        //Toastr Three
        $(document).on('click', '.toastr_three', function(e) {
            e.preventDefault();
            toastr.error('Inconceivable', 'Toastr Three', {
                "closeButton": true,
                "progressBar": true,
                "showEasing": "swing",
                "hideEasing": "linear",
                "showDuration": "400",
                "hideDuration": "200",
                "showMethod": "slideDown",
                "hideMethod": "slideUp",
            });
        });
        //Toastr Four
        $(document).on('click', '.toastr_four', function(e) {
            e.preventDefault();
            toastr.info('Are you the 6 fingered man?', 'Toastr Four', {
                "closeButton": true,
            });
        });
        //Toastr Five
        $(document).on('click', '.toastr_five', function(e) {
            e.preventDefault();
            toastr.success('Have fun storming the castle!', 'Toastr Five', {
                "closeButton": true,
            });
        });
        //Toastr Six
        $(document).on('click', '.toastr_six', function(e) {
            e.preventDefault();
            toastr.error('Inconceivable', 'Toastr Six', {
                "closeButton": true,
            });
        });
        ///Toastr Seven
        $(document).on('click', '.toastr_seven', function(e) {
            e.preventDefault();
            toastr.info('Are you the 6 fingered man?', 'Toastr Seven');
        });
        //Toastr Eight
        $(document).on('click', '.toastr_eight', function(e) {
            e.preventDefault();
            toastr.success('Have fun storming the castle!', 'Toastr Eight');
        });
        //Toastr Nine
        $(document).on('click', '.toastr_nine', function(e) {
            e.preventDefault();
            toastr.error('Inconceivable', 'Toastr Nine');
        });



        /*========================================
            // Light Gallery Js
        ========================================*/
        // Light Gallery Modern
        // Fancybox plugin forces me to the (.bind) use.here is fancybox reference http://fancybox.net/
        Fancybox.bind(document.getElementById("lightGallery_one"), "[data-fancybox]", {
            // Your custom options
            Thumbs: {
                type: "modern",
            },
            Images: {
                initialSize: "fit",
                Panzoom: {
                    maxScale: 3,
                },
            },
        });
        // Light Gallery Classic
        // Fancybox plugin forces me to the (.bind) use.here is fancybox reference http://fancybox.net/
        Fancybox.bind(document.getElementById("lightGallery_two"), "[data-fancybox]", {
            // Your custom options
            Thumbs: {
                type: "classic",
            },
            Images: {
                initialSize: "fit",
                Panzoom: {
                    maxScale: 3,
                },
            },
        });
        // Light Gallery Without Thumbs
        // Fancybox plugin forces me to the (.bind) use.here is fancybox reference http://fancybox.net/
        Fancybox.bind(document.getElementById("lightGallery_three"), "[data-fancybox]", {
            // Your custom options
            Thumbs: {
                type: "classic",
                showOnStart: false,
            },
            Thumbs: false,
            Images: {
                initialSize: "fit",
                Panzoom: {
                    maxScale: 3,
                },
            },
        });
        // Light Gallery Slide Show
        // Fancybox plugin forces me to the (.bind) use.here is fancybox reference http://fancybox.net/
        Fancybox.bind(document.getElementById("lightGallery_four"), "[data-fancybox]", {
            // Your custom options
            Thumbs: {
                type: "modern",
            },
            Images: {
                initialSize: "fit",
                Panzoom: {
                    maxScale: 3,
                },
            },
            Slideshow: {
                playOnStart: true,
            },
        });

        /*================================================
            // Summer Note JS
        ================================================*/
        $('#summernote_js').summernote({
            height: 400,
        });

        /*================================================
           Date Time Picker Js
        ================================================*/
        $(".dateTime_one").flatpickr({
            dateFormat: "d-m-Y",
        });
        $(".dateTime_two").flatpickr({
            dateFormat: "Y-m-d",
        });
        $(".dateTime_three").flatpickr({
            enableTime: true,
            dateFormat: "d-m-Y H:i \\ k",
            time_24hr: false,
            altInput: true,
        });
        $(".dateTime_four").flatpickr({
            enableTime: true,
            dateFormat: "Y-m-d H:i \\ K",
            time_24hr: true,
            altInput: true,
        });
        $(".dateTime_five").flatpickr({
            altInput: true,
            altFormat: "Y , j F",
        });
        $(".dateTime_six").flatpickr({
            altInput: true,
            altFormat: "Y, F j",
        });
        $(".dateTime_seven").flatpickr({
            minDate: "2020-01",
            dateFormat: "d.m.Y",
        });
        $(".dateTime_eight").flatpickr({
            maxDate: "01.01.2023",
            dateFormat: "d.m.Y",
        });
        $(".dateTime_nine").flatpickr({
            minDate: "today",
        });
        $(".dateTime_ten").flatpickr({
            minDate: "today",
            maxDate: new Date().fp_incr(14) // 14 days from now
        });
        $(".dateTime_eleven").flatpickr({
            dateFormat: "Y-m-d",
            disable: [{
                    from: "2023-08-01",
                    to: "2023-12-01"
                },
                {
                    from: "2023-04-01",
                    to: "2023-04-30",
                }
            ]
        });
        $(".dateTime_twelve").flatpickr({
            dateFormat: "d/m/Y",
            disable: [{
                from: "01-02-2023",
                to: "31-05-2023",
            }]
        });
        $(".dateTime_thirteen").flatpickr({
            mode: "multiple",
            dateFormat: "Y-m-d",
            conjunction: " & "
        });
        $(".dateTime_fourteen").flatpickr({
            mode: "multiple",
            dateFormat: "d-m-Y",
            conjunction: " :: "
        });
        $(".dateTime_fifteen").flatpickr({
            mode: "multiple",
            dateFormat: "Y-m-d",
            mode: "range"
        });
        $(".dateTime_sixteen").flatpickr({
            mode: "multiple",
            dateFormat: "d-m-Y",
            mode: "range"
        });
        $(".dateTime_seventeen").flatpickr({
            enableTime: true,
            noCalendar: true,
            dateFormat: "H:i \\ k",
            time_24hr: false,
            altInput: true,
        });
        $(".dateTime_eighteen").flatpickr({
            enableTime: true,
            noCalendar: true,
            dateFormat: "H:i",
            time_24hr: true,
            altInput: false,
        });
        $(".dateTime_nineteen").flatpickr({
            altInput: true,
            altFormat: " F j, Y ",
            weekNumbers: true,
        });
        $(".dateTime_twenty").flatpickr({
            altInput: true,
            altFormat: " j F, Y ",
            weekNumbers: true,
        });
        $(".dateTime_twenty_one").flatpickr({
            altInput: true,
            altFormat: "Y , j F",
            inline: true,
        });
        $(".dateTime_twenty_two").flatpickr({
            altInput: true,
            altFormat: " F j, Y ",
            inline: true,
        });


        /*========================================
            // Chart Home
        ========================================*/
        // Start Home Chat js
        // Chat configuration js
        function configure_chart_js({
            bgColor,
            dt_data,
            source,
            dt_type = 'bar',
            dt_labels = [],
            dt_options,
            dt_borderColor = "transparent",
            dt_borderWidth = 0,
            dt_hoverOffset = 4,
            dt_datasets = null
        })
        {
            let dataSet = [];

            if(dt_datasets == null) {
                dataSet = [{
                        label: '',
                        backgroundColor: bgColor,
                        borderColor: dt_borderColor,
                        borderWeight: dt_borderWidth,
                        data: dt_data,
                        hoverOffset: dt_hoverOffset,
                    }];
            } else {
                dataSet = dt_datasets
            }

            let config = {
                type: dt_type,
                data: {
                    labels: dt_labels,
                    fill: false,
                    datasets: dataSet
                },
                // this options is only for bar chart
                options: dt_options
            };

            return new Chart(
                source,
                config
            )
        }
        const chartJsOption = {
            responsive: true,
            plugins: {
                legend: {
                    display: true,
                    labels: {
                        color: cssvar('--body-color'),
                    },
                }
            },
            scales: {
                x: {
                    ticks: {
                        beginAtZero: true,
                        color: cssvar('--body-color'),
                    },
                    gridLines: {
                        display: true,
                        borderColor: cssvar('--border-color'),
                        color: cssvar('--body-color'),
                        lineWidth: 1,
                    },
                },
                y: {
                    ticks: {
                        beginAtZero: true,
                        color: cssvar('--body-color'),
                    },
                    gridLines: {
                        display: true,
                        borderColor: cssvar('--border-color'),
                        color: cssvar('--body-color'),
                        lineWidth: 1,
                    },
                }
            },
        };

        // horizontal Bar Chart js
        let barChartjs = null;
        if ($('#barChart').length) {
            barChart();
        }
        function barChart() {
            if(barChartjs){
                barChartjs.destroy();
            }
            barChartjs = configure_chart_js({
                dt_type: "bar",
                dt_labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                dt_data: [400, 300, 200, 100, 350, 200, 100, 500, 300, 80, 300, 100, 300],
                source: document.getElementById("barChart"),
                dt_datasets: [
                    {
                        label: "Bar one",
                        backgroundColor: cssvar('--main-color-one'),
                        data: [400, 300, 200, 100, 350, 200, 100, 500, 300, 80, 300, 100, 300],
                        barThickness: 10,
                        hoverBackgroundColor: cssvar('--white'),
                        hoverBorderColor: cssvar('--main-color-one'),
                        borderColor: cssvar('--main-color-one'),
                        borderWidth: 2,
                    },
                    {
                        label: "Bar Two",
                        backgroundColor: `rgba(${cssvar('--main-color-one-rgb')}, .5)`,
                        data: [708, 947, 975, 734, 1200, 250, 1000, 708, 947, 1275, 734, 1000],
                        barThickness: 10,
                        hoverBackgroundColor: cssvar('--white'),
                        hoverBorderColor: `rgba(${cssvar('--main-color-one-rgb')}, .5)`,
                        borderColor: `rgba(${cssvar('--main-color-one-rgb')}, .5)`,
                        borderWidth: 2,
                    }
                ]
            });
        }

        // horizontal Bar Chart js
        let horizontalChartJS = null;
        if ($("#horizontalBarChart").length) {
            horizontalBarChart();
        };
        function horizontalBarChart() {
            if(horizontalChartJS){
                horizontalChartJS.destroy();
            }
            horizontalChartJS = configure_chart_js({
                dt_type: "bar",
                dt_labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                dt_data: [400, 300, 200, 100, 350, 200, 100, 500, 300, 80, 300, 100, 300],
                source: document.getElementById("horizontalBarChart"),
                dt_options: {indexAxis: "y"},
                dt_datasets: [
                    {
                        label: "Bar one",
                        backgroundColor: cssvar('--main-color-one'),
                        data: [400, 300, 200, 100, 350, 200, 100, 500, 300, 80, 300, 100, 300],
                        barThickness: 10,
                        hoverBackgroundColor: cssvar('--white'),
                        hoverBorderColor: cssvar('--main-color-one'),
                        borderColor: cssvar('--main-color-one'),
                        borderWidth: 2,
                    },
                    {
                        label: "Bar Two",
                        backgroundColor: `rgba(${cssvar('--main-color-one-rgb')}, .5)`,
                        data: [708, 947, 975, 734, 1200, 250, 1000, 708, 947, 1275, 734, 1000],
                        barThickness: 10,
                        hoverBackgroundColor: cssvar('--white'),
                        hoverBorderColor: `rgba(${cssvar('--main-color-one-rgb')}, .5)`,
                        borderColor: `rgba(${cssvar('--main-color-one-rgb')}, .5)`,
                        borderWidth: 2,
                    }
                ]
            });
        }
        // Bar Chart Device js
        let barChartDeviceJs = null;
        if ($("#barChartDevice").length) {
            barChartDevice();
        };
        function barChartDevice(){
            if(barChartDeviceJs){
                barChartDeviceJs.destroy();
            }
            barChartDeviceJs = configure_chart_js({
                dt_type: "bar",
                dt_labels: ["Mobile", "Desktop", "Tablet", "Laptop"],
                dt_data: [400, 300, 200, 100, 350, 200, 100, 500, 300, 80, 300, 100, 300],
                source: document.getElementById("barChartDevice"),
                dt_datasets: [
                    {
                        label: 'Visitors',
                        data: [833, 1644, 997, 1500, 1184],
                        backgroundColor: [ cssvar('--main-color-one'), cssvar('--primary'), cssvar('--orange'), cssvar('--brown')],
                        barThickness: 20,
                        hoverBackgroundColor: '#fff',
                        hoverBorderColor: [cssvar('--main-color-one'), cssvar('--primary'), cssvar('--orange'), cssvar('--brown')],
                        borderColor: [cssvar('--main-color-one'), cssvar('--primary'), cssvar('--orange'), cssvar('--brown')],
                        borderWidth: 2,
                    }
                ],
            });
        }
        // line chart customer js
        let lineChartCustomerJs = null;
        if ($("#lineChartCustomer").length) {
            lineChartCustomer();
        };
        function lineChartCustomer() {
            if(lineChartCustomerJs) {
                lineChartCustomerJs.destroy();
            }
            const dataLevelOne = [496, 744, 816, 486, 820, 521, 633, 421, 883, 720, 980, 700];
            const dataLevelTwo = [686, 614, 780, 716, 557, 491, 813, 501, 643, 910, 680, 900];
            lineChartCustomerJs = configure_chart_js({
                dt_type: "line",
                dt_labels: ['Jan', 'Feb', "Mar", 'Apr', 'May', "Jun", "July", 'Aug', "Sep", 'Oct', 'Nov', 'Dec'],
                source: document.getElementById("lineChartCustomer"),
                dt_datasets: [
                    {
                        data: dataLevelOne,
                        label: "New Customer",
                        borderColor: cssvar('--main-color-one'),
                        borderWidth: 2,
                        fill: true,
                        backgroundColor: `rgba(${cssvar('--main-color-one-rgb')}, .05)`,
                        pointBorderWidth: 2,
                        pointBackgroundColor: cssvar('--white'),
                        pointRadius: 2,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: cssvar('--main-color-one'),
                        lineTension: .5,
                    }, {
                        data: dataLevelTwo,
                        label: "Retaining Customer",
                        borderColor: cssvar('--primary'),
                        borderWidth: 2,
                        fill: true,
                        backgroundColor: `rgba(${cssvar('--primary-rgb')}, .05)`,
                        pointBorderWidth: 2,
                        pointBackgroundColor: cssvar('--white'),
                        pointRadius: 2,
                        pointHoverRadius: 4,
                        pointHoverBackgroundColor: cssvar('--primary'),
                        lineTension: .5,
                    }
                ],
            });
        }
        // doughnutChart js
        let doughnutChartJs = null;
        if ($("#doughnutChart").length) {
            doughnutChart();
        };
        function doughnutChart() {
            if(doughnutChartJs) {
                doughnutChartJs.destroy();
            }
            doughnutChartJs = configure_chart_js({
                dt_type: "doughnut",
                dt_labels: ['Chrome','Firefox','Microsoft Edge','Opera Mini Edge','Safari','Others',],
                dt_data: [220, 120, 80, 100, 180, 50],
                source: document.getElementById("doughnutChart"),
                dt_datasets: [
                    {
                      label: 'My First Dataset',
                      data: [220, 120, 80, 100, 180, 50],
                      backgroundColor: [cssvar('--main-color-one'), cssvar('--primary'), cssvar('--orange'), cssvar('--brown'), cssvar('--green'), cssvar('--sky')],
                      hoverOffset: 5,
                      borderAlign: 'center',
                      borderColor: cssvar('--white'),
                      borderWidth: 0,
                      borderJoinStyle: 'miter',
                      spacing: 10,
                      radius: "90%",
                      aspectRatio: 1,
                    }
                ],
            });
        }

        //crm card chart
        // Lead Generator apex chart js
        if ($("#lead_generator").length > 0) {
            let options = {
                chart: {
                    type: 'area',
                    toolbar: {
                      show: false
                    },
                },
                title: {
                    text: undefined,
                    align: 'left',
                    margin: 0,
                    offsetX: 0,
                    offsetY: 0,
                    style: {
                        fontSize:  '14px',
                        fontWeight:  '600',
                        color:  'var(--paragraph-color)',
                    },
                },
                dataLabels: {
                    enabled: false,
                },
                legend: {
                    markers: {
                        fillColors: "var(--main-color-three)",
                        show: false,
                    },
                },
                tooltip: {
                    theme: 'light',
                    enabled: true,
                    style: {
                        fontSize: '12px',
                    },
                    marker: {
                        fillColors: ["var(--main-color-three)"],
                        shape: "square",
                        show: false,
                    },
                },
                stroke: {
                    curve: 'smooth',
                    colors: "var(--main-color-three)",
                    width: 2,
                },
                markers: {
                    size: 0,
                    show: false,
                    colors: "var(--main-color-three)",
                },
                fill: {
                    colors: "var(--main-color-three)",
                    type: 'gradient',
                    gradient: {
                        shade: 'light',
                        gradientToColors: ['var(--main-color-three)'],
                        shadeIntensity: 1,
                        type: 'vertical',
                        opacityFrom: .6,
                        opacityTo: .01,
                        stops: [0, 100, 100, 100],
                    },
                },
                series: [{
                    name: 'sales',
                    data: [30, 40, 95, 50, 49, 100, 150, 100, 125, 190],
                }],
                grid: {
                    show: false,
                    borderColor: 'var(--border-color)',
                },
                xaxis: {
                    show: false,
                    categories: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct"],
                    title: {
                        colors: "var(--paragraph-color)",
                    },
                    axisTicks: {
                        show: false,
                    },
                    axisBorder: {
                        show: false,
                        color: "var(--border-color)",
                        width: '1px',
                    },
                    labels: {
                        show: false,
                        style: {
                            colors: "var(--paragraph-color)",
                        }
                    },
                },
                yaxis: {
                    show: false,
                    axisTicks: {
                        show: false,
                    },
                    axisBorder: {
                        show: false,
                        color: "var(--border-color)",
                        width: '1px',
                    },
                    labels: {
                        show: false,
                        style: {
                            colors: "var(--paragraph-color)",
                        }
                    },
                },
                responsive: [{
                    breakpoint: 575,
                    options: {
                        chart: {
                            width: "100%",
                            height: "100%",
                        },
                        legend: {
                            position: 'bottom',
                            itemMargin: {
                                horizontal: 0,
                                vertical: 0,
                            },
                        }
                    }
                }]
            };

            let chartElements = new ApexCharts(document.querySelector("#lead_generator"), options);

            chartElements.render();
        };
        // Total Conversion apex chart js
        if ($("#total_conversion").length > 0) {
            let options = {
                chart: {
                    type: 'area',
                    toolbar: {
                      show: false
                    },
                },
                title: {
                    text: undefined,
                    align: 'left',
                    margin: 0,
                    offsetX: 0,
                    offsetY: 0,
                    style: {
                        fontSize:  '14px',
                        fontWeight:  '600',
                        color:  'var(--paragraph-color)',
                    },
                },
                dataLabels: {
                    enabled: false,
                },
                tooltip: {
                    theme: 'light',
                    background: "var(--white-bg)",
                    enabled: true,
                    style: {
                        fontSize: '12px',
                        background: "var(--white-bg)",
                        color: "var(--paragraph-color)"
                    },
                    marker: {
                        fillColors: ["var(--primary)"],
                        shape: "square",
                        show: false,
                    },
                },
                stroke: {
                    curve: 'smooth',
                    colors: "var(--primary)",
                    width: 2,
                },
                markers: {
                    size: 5,
                    colors: "var(--primary)",
                },
                fill: {
                    colors: "var(--primary)",
                    type: 'gradient',
                    gradient: {
                        // shade: 'light',
                        gradientToColors: ['var(--primary)'],
                        shadeIntensity: 1,
                        type: 'vertical',
                        opacityFrom: .6,
                        opacityTo: .01,
                        stops: [0, 100, 100, 100],
                    },
                },
                series: [{
                    name: 'sales',
                    data: [130, 100, 250, 150, 110, 160, 90, 110, 65, 40],
                }],
                grid: {
                    show: false,
                    borderColor: 'var(--border-color)',
                },
                xaxis: {
                    show: false,
                    categories: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct"],
                    title: {
                        colors: "var(--paragraph-color)",
                    },
                    axisTicks: {
                        show: false,
                    },
                    axisBorder: {
                        show: false,
                        color: "var(--border-color)",
                        width: '1px',
                    },
                    labels: {
                        show: false,
                        style: {
                            colors: "var(--paragraph-color)",
                        }
                    },
                },
                yaxis: {
                    show: false,
                    axisTicks: {
                        show: false,
                    },
                    axisBorder: {
                        show: false,
                        color: "var(--border-color)",
                        width: '1px',
                    },
                    labels: {
                        show: false,
                        style: {
                            colors: "var(--paragraph-color)",
                        }
                    },
                },
                responsive: [{
                    breakpoint: 575,
                    options: {
                        chart: {
                            width: "100%",
                            height: "100%",
                        },
                        legend: {
                            position: 'bottom',
                            itemMargin: {
                                horizontal: 0,
                                vertical: 0,
                            },
                        }
                    }
                }]
            };

            let chartElements = new ApexCharts(document.querySelector("#total_conversion"), options);

            chartElements.render();
        };
        // Lead Source apex chart js
        if ($("#lead_source").length > 0) {
            let options = {
                series: [90, 63, 40],
                chart: {
                    type: 'pie',
                    width: "100%",
                },
                labels: ['Social Media', 'Referrals', 'Search Engines'],
                dataLabels: {
                    enabled: true,
                },
                title: {
                    align: 'center',
                    text: undefined,
                    style: {
                        fontSize:  '14px',
                        fontWeight:  '600',
                        color: 'var(--paragraph-color)',
                    },
                },
                legend: {
                    position: 'bottom',
                    show: true,
                    markers: {
                        fillColors: ["var(--main-color-three)", "var(--primary)", "var(--orange)", "var(--brown)", "var(--green)"],
                    },
                    itemMargin: {
                        horizontal: 5,
                        vertical: 5,
                    },
                    labels: {
                        colors: "var(--paragraph-color)",
                        useSeriesColors: undefined,
                    },
                },
                grid: {
                    borderColor: 'var(--border-color)',
                },
                // stroke:{
                //     colors:['var(--border-color)']
                // },
                plotOptions: {
                    pie: {
                        customScale: 1.1,
                        dataLabels: {
                            offset: -10,
                        },
                        donut: {
                            size: '95%'
                        }
                    }
                },
                colors: ["var(--main-color-three)", "var(--primary)", "var(--orange)"],
                fill: {
                    colors: ["var(--main-color-three)", "var(--primary)", "var(--orange)"],
                },
                responsive: [{
                    breakpoint: 575,
                    options: {
                        chart: {
                            width: "100%",
                        },
                        legend: {
                            position: 'bottom',
                            itemMargin: {
                                horizontal: 0,
                                vertical: 0,
                            },
                        },
                        plotOptions: {
                            pie: {
                                customScale: 1.0,
                                width: "100%",
                                dataLabels: {
                                    offset: -12,
                                },
                                donut: {
                                    size: '100%'
                                }
                            }
                        },
                    }
                }]
            };

            let chartElements = new ApexCharts(document.querySelector("#lead_source"), options);

            chartElements.render();
        };
        // Sales Pipeline apex chart js
        if ($("#sales_pipeline").length > 0) {
            let options = {
                series: [{
                    data: [40, 28, 50, 15, 35, 22]
                }],
                chart: {
                    type: 'bar',
                    toolbar: {
                        show: false,
                    },
                },
                plotOptions: {
                    bar: {
                        horizontal: false,
                        columnWidth: '30%',
                        distributed: true,
                        borderRadius: 10,
                    }
                },
                dataLabels: {
                    enabled: false,
                },
                legend: {
                    show: false,
                },
                fill: {
                    colors: ["var(--main-color-three)", "var(--primary)", "var(--orange)", "var(--brown)", "var(--green)", "var(--sky)", "var(--pink)", "var(--primary)"],
                },
                grid: {
                    show: true,
                    borderColor: 'var(--border-color)',
                },
                xaxis: {
                    categories: [['Prospecting'], ['Qualification'], ['Need analysis'], ['Proposals'], ['Negotiation'], ['Won'], ['David Wilson'], ['Lily Roberts'],
                    ],
                    axisTicks: {
                        show: false,
                    },
                    axisBorder: {
                        show: false,
                        color: "var(--border-color)",
                        width: '1px',
                    },
                    labels: {
                        style: {
                            colors: "var(--paragraph-color)",
                        }
                    },
                },
                yaxis: {
                    axisTicks: {
                        show: false,
                    },
                    axisBorder: {
                        show: false,
                        color: "var(--border-color)",
                        width: '1px',
                    },
                    labels: {
                        style: {
                            colors: "var(--paragraph-color)",
                        }
                    },
                },
                responsive: [{
                    breakpoint: 575,
                    options: {
                        chart: {
                            // width: "100%",
                        },
                        legend: {
                            position: 'bottom',
                            itemMargin: {
                                horizontal: 5,
                                vertical: 5,
                            },
                        }
                    }
                }]
            };

            let chartElements = new ApexCharts(document.querySelector("#sales_pipeline"), options);

            chartElements.render();
        };
        // Invoice Donut apex chart js
        if ($("#invoices_donut").length > 0) {
            let options = {
                series: [44, 37, 33],
                chart: {
                    type: 'donut',
                    // type: 'radialBar',
                },
                labels: ["Paid", "Pending", "Reviewer"],
                colors: ["var(--main-color-three)", "rgba(var(--main-color-three-rgb), .5)", "rgba(var(--main-color-three-rgb), .2)", "var(--brown)", "var(--green)", "var(--sky)", "var(--pink)"],
                fill: {
                    colors: ["var(--main-color-three)", "rgba(var(--main-color-three-rgb), .5)", "rgba(var(--main-color-three-rgb), .2)", "var(--brown)", "var(--green)", "var(--sky)", "var(--pink)"],
                },
                theme: {
                    mode: 'light',
                    palette: 'palette10',
                    radius: 15,
                    monochrome: {
                        enabled: false,
                        color: '#555',
                        shadeTo: 'light',
                        shadeIntensity: 0.9,
                    },
                },
                title: {
                    align: 'center',
                    text: undefined,
                    style: {
                        fontSize: "14px",
                        fontWeight: "600",
                        color: "var(--paragraph-color)",
                    }
                },
                dataLabels: {
                    formatter: function(val, opts) {
                        return [val.toFixed(1) + '%'];
                    },
                },
                legend: {
                    position: 'top',
                    show: true,
                    itemMargin: {
                        horizontal: 12,
                        vertical: 12,
                    },
                    labels: {
                        colors: "var(--paragraph-color)",
                        useSeriesColors: undefined,
                    },
                },
                plotOptions: {
                    pie: {
                        startAngle: -90,
                        endAngle: 90,
                        offsetY: 10
                    }
                },
                grid: {
                    borderColor: "var(--border-color)",
                    padding: {
                        bottom: -150
                    }
                },
                stroke:{
                    colors:['var(--border-color)']
                },
                responsive: [{
                    breakpoint: 575,
                    options: {
                        chart: {
                            // width: "100%",
                        },
                        legend: {
                            position: 'bottom',
                            itemMargin: {
                                horizontal: 5,
                                vertical: 5,
                            },
                        }
                    }
                }]
            };

            let chartElements = new ApexCharts(document.querySelector("#invoices_donut"), options);

            chartElements.render();
        };
        // Income Expense apex chart js
        if ($("#income_expense").length > 0) {
            let options = {
                chart: {
                    type: 'line',
                    toolbar: {
                        show: false
                    },
                },
                title: {
                    text: undefined,
                    align: 'left',
                    style: {
                        fontSize:  '14px',
                        fontWeight:  '600',
                        color:  'var(--paragraph-color)'
                    },
                },
                dataLabels: {
                    enabled: false,
                },
                legend: {
                    markers: {
                        fillColors: ["var(--main-color-three)", "var(--danger)"],
                    },
                    itemMargin: {
                        horizontal: 12,
                        vertical: 20,
                    },
                    labels: {
                        colors: "var(--paragraph-color)",
                        useSeriesColors: undefined,
                    },
                },
                tooltip: {
                    theme: 'light',
                    enabled: true,
                    style: {
                        fontSize: '12px',
                    },
                    marker: {
                        show: false,
                        fillColors: ["var(--main-color-three)", "var(--danger)"],
                        shape: "square",
                    },
                },
                stroke: {
                    curve: 'smooth',
                    colors: ["var(--main-color-three)", "var(--danger)"],
                },
                markers: {
                    size: 5,
                    show: true,
                    colors: ["var(--main-color-three)", "var(--danger)"],
                },
                fill: {
                    colors: ["var(--main-color-three)", "var(--danger)"],
                    show: false,
                    type: 'gradient',
                    gradient: {
                        shade: 'light',
                        gradientToColors: ['var(--main-color-three)', "var(--danger)"],
                        shadeIntensity: 1,
                        type: 'horizontal',
                        opacityFrom: .3,
                        opacityTo: .8,
                        stops: [0, 100, 100, 100],
                    },
                },
                series: [{
                        name: 'Income',
                        data: [30, 80, 75, 20, 49, 80],
                    },
                    {
                        name: 'Expense',
                        data: [11, 99, 35, 72, 14, 99]
                    }
                ],
                grid: {
                    show: false,
                    borderColor: 'var(--border-color)',
                },
                xaxis: {
                    categories: ["Jan", "Feb", "Mar", "Apr", "May", "June"],
                    title: {
                        colors: "var(--paragraph-color)",
                    },
                    axisTicks: {
                        show: false,
                    },
                    axisBorder: {
                        show: false,
                        color: "var(--border-color)",
                        width: '1px',
                    },
                    labels: {
                        style: {
                            colors: "var(--paragraph-color)",
                        }
                    },
                },
                yaxis: {
                    axisTicks: {
                        show: false,
                    },
                    axisBorder: {
                        show: false,
                        color: "var(--border-color)",
                        width: '1px',
                    },
                    labels: {
                        style: {
                            colors: "var(--paragraph-color)",
                        }
                    },
                },
                responsive: [{
                    breakpoint: 575,
                    options: {
                        chart: {
                            // width: "100%",
                        },
                        legend: {
                            position: 'bottom',
                            itemMargin: {
                                horizontal: 5,
                                vertical: 5,
                            },
                        }
                    }
                }]
            };

            let chartElements = new ApexCharts(document.querySelector("#income_expense"), options);

            chartElements.render();
        };
        // Support js
        if ($("#support_ticket").length > 0) {
            let options = {
                series: [{
                    name: "Tickets Generated",
                    data: [44, 55, 57, 56, 61, 58, 63]
                },  {
                    name: "Tickets Solved",
                    data: [35, 41, 36, 26, 45, 48, 52]
                }],
                chart: {
                    type: 'bar',
                    toolbar: {
                        show: false,
                    }
                },
                title: {
                    align: 'center',
                    text: undefined,
                    style: {
                        fontSize:  '14px',
                        fontWeight:  '600',
                        color:  'var(--paragraph-color)'
                    },
                },
                legend: {
                    markers: {
                        fillColors: ["var(--main-color-three)", "var(--success)"],
                    },
                    itemMargin: {
                        horizontal: 12,
                        vertical: 10,
                    },
                    labels: {
                        colors: "var(--paragraph-color)",
                        useSeriesColors: undefined,
                    },
                },
                tooltip: {
                    theme: 'light',
                    // theme: 'dark',
                    enabled: true,
                    style: {
                        fontSize: '12px',
                    },
                    marker: {
                        show: true,
                        fillColors: ["var(--main-color-three)", "var(--success)"],
                        shape: "square",
                    },
                },
                plotOptions: {
                    bar: {
                        horizontal: false,
                        columnWidth: '55%',
                        endingShape: 'rounded'
                    },
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    show: true,
                    width: 2,
                    colors: ['transparent']
                },
                grid: {
                    show: true,
                    borderColor: 'var(--border-color)',
                },
                xaxis: {
                    categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                    title: {
                        colors: "var(--paragraph-color)",
                    },
                    axisTicks: {
                        show: false,
                    },
                    axisBorder: {
                        show: false,
                        color: "var(--border-color)",
                        width: '1px',
                    },
                    labels: {
                        style: {
                            colors: "var(--paragraph-color)",
                        }
                    },
                },
                yaxis: {
                    axisTicks: {
                        show: false,
                    },
                    axisBorder: {
                        show: true,
                        color: "var(--border-color)",
                        width: '1px',
                    },
                    labels: {
                        style: {
                            colors: "var(--paragraph-color)",
                        }
                    },
                    title: {
                        text: undefined,
                        style: {
                            color: "var(--paragraph-color)",
                        }
                    },
                },
                fill: {
                    colors: ["var(--main-color-three)", "var(--success)"],
                    opacity: 1
                },
                responsive: [{
                    breakpoint: 575,
                    options: {
                        chart: {
                            // width: "100%",
                        },
                        legend: {
                            position: 'top',
                            itemMargin: {
                                horizontal: 5,
                                vertical: 5,
                            },
                        }
                    }
                }]
            };

            let chartElements = new ApexCharts(document.querySelector("#support_ticket"), options);

            chartElements.render();
        };
        // Lead Generator
        if ($("#traffics").length > 0) {
            let options = {
                chart: {
                    type: 'line',
                    toolbar: {
                      show: false
                    },
                },
                title: {
                    text: undefined,
                    align: 'left',
                    margin: 0,
                    offsetX: 0,
                    offsetY: 0,
                    style: {
                        fontSize:  '14px',
                        fontWeight:  '600',
                        color:  'var(--paragraph-color)',
                    },
                },
                dataLabels: {
                    enabled: false,
                },
                legend: {
                    markers: {
                        fillColors: "var(--main-color-three)",
                        show: false,
                    },
                },
                tooltip: {
                    theme: 'light',
                    enabled: true,
                    style: {
                        fontSize: '12px',
                    },
                    marker: {
                        fillColors: ["var(--main-color-three)"],
                        shape: "square",
                        show: false,
                    },
                },
                stroke: {
                    curve: 'smooth',
                    colors: "var(--main-color-three)",
                    width: 2,
                },
                markers: {
                    size: 0,
                    show: false,
                    colors: "var(--main-color-three)",
                },
                fill: {
                    colors: "var(--main-color-three)",
                    type: 'gradient',
                    gradient: {
                        shade: 'light',
                        gradientToColors: ['var(--main-color-three)'],
                        shadeIntensity: 1,
                        type: 'vertical',
                        opacityFrom: .8,
                        opacityTo: .01,
                        stops: [0, 100, 100, 100],
                    },
                },
                series: [{
                    name: 'sales',
                    data: [200, 440, 655, 90, 150, 400, 590],
                }],
                grid: {
                    show: true,
                    borderColor: 'var(--border-color)',
                },
                xaxis: {
                    show: true,
                    categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                    title: {
                        colors: "var(--paragraph-color)",
                    },
                    axisTicks: {
                        show: false,
                    },
                    axisBorder: {
                        show: false,
                        color: "var(--border-color)",
                        width: '1px',
                    },
                    labels: {
                        show: true,
                        style: {
                            colors: "var(--paragraph-color)",
                        }
                    },
                },
                yaxis: {
                    show: true,
                    axisTicks: {
                        show: false,
                    },
                    axisBorder: {
                        show: false,
                        color: "var(--border-color)",
                        width: '1px',
                    },
                    labels: {
                        show: true,
                        style: {
                            colors: "var(--paragraph-color)",
                        }
                    },
                },
                responsive: [{
                    breakpoint: 575,
                    options: {
                        chart: {
                            width: "100%",
                            height: "100%",
                        },
                        legend: {
                            position: 'bottom',
                            itemMargin: {
                                horizontal: 0,
                                vertical: 0,
                            },
                        }
                    }
                }]
            };

            let chartElements = new ApexCharts(document.querySelector("#traffics"), options);

            chartElements.render();
        };
        // Projects
        if ($("#projects").length > 0) {
            let options = {
                chart: {
                    type: 'line',
                    toolbar: {
                        show: false,
                    },
                    height: '140px',
                },
                title: {
                    text: undefined,
                    align: 'left',
                    style: {
                        fontSize:  '14px',
                        fontWeight:  '600',
                        color:  'var(--paragraph-color)'
                    },
                },
                dataLabels: {
                    enabled: false,
                },
                legend: {
                    markers: {
                        fillColors: ["var(--main-color-three)", "var(--success)"],
                    },
                    itemMargin: {
                        horizontal: 12,
                        vertical: 10,
                    },
                    labels: {
                        colors: "var(--paragraph-color)",
                        useSeriesColors: undefined,
                    },
                },
                tooltip: {
                    theme: 'light',
                    enabled: true,
                    style: {
                        fontSize: '12px',
                    },
                    marker: {
                        show: false,
                        fillColors: ["var(--main-color-three)", "var(--success)"],
                        shape: "square",
                    },
                },
                stroke: {
                    curve: 'straight',
                    colors: ["var(--main-color-three)", "var(--success)"],
                },
                markers: {
                    size: 5,
                    show: true,
                    colors: ["var(--main-color-three)", "var(--success)"],
                },
                fill: {
                    colors: ["var(--main-color-three)", "var(--success)"],
                    show: false,
                    type: 'gradient',
                    gradient: {
                        shade: 'light',
                        gradientToColors: ['var(--main-color-three)', "var(--success)"],
                        shadeIntensity: 1,
                        type: 'horizontal',
                        opacityFrom: .3,
                        opacityTo: .8,
                        stops: [0, 100, 100, 100],
                    },
                },
                series: [{
                        name: 'Created',
                        data: [130, 180, 175, 120, 149, 280, 190],
                    },
                    {
                        name: 'Completed',
                        data: [111, 99, 135, 72, 114, 99, 119]
                    }
                ],
                grid: {
                    show: false,
                    borderColor: 'var(--border-color)',
                },
                xaxis: {
                    categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                    title: {
                        colors: "var(--paragraph-color)",
                    },
                    axisTicks: {
                        show: false,
                    },
                    axisBorder: {
                        show: false,
                        color: "var(--border-color)",
                        width: '1px',
                    },
                    labels: {
                        style: {
                            colors: "var(--paragraph-color)",
                        }
                    },
                },
                yaxis: {
                    axisTicks: {
                        show: false,
                    },
                    axisBorder: {
                        show: false,
                        color: "var(--border-color)",
                        width: '1px',
                    },
                    labels: {
                        style: {
                            colors: "var(--paragraph-color)",
                        }
                    },
                },
                responsive: [{
                    breakpoint: 575,
                    options: {
                        chart: {
                            // width: "100%",
                        },
                        legend: {
                            position: 'bottom',
                            itemMargin: {
                                horizontal: 5,
                                vertical: 5,
                            },
                        }
                    }
                }]
            };

            let chartElements = new ApexCharts(document.querySelector("#projects"), options);

            chartElements.render();
        };

        // HRM chart
        // Present Employee js
        if ($("#present_employee").length > 0) {
            let options = {
                series: [{
                    name: "Present Employee",
                    data: [106, 161, 188]
                }],
                chart: {
                    type: 'bar',
                    width: '80px',
                    height: '100px',
                    parentHeightOffset: 0,
                    sparkline: {
                        enabled: true,
                    },
                    toolbar: {
                        show: false,
                    },
                },
                tooltip: {
                    theme: 'light',
                    // theme: 'dark',
                    enabled: true,
                    style: {
                        fontSize: '12px',
                    },
                },
                plotOptions: {
                    bar: {
                        horizontal: false,
                        columnWidth: '30%',
                        barHeight: '100%',
                    },
                },
                grid: {
                    show: false,
                    padding: {
                      top: 0,
                      bottom: 0,
                      left: 0,
                      right: 0,
                    },
                },
                xaxis: {
                    categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                },
                fill: {
                    colors: ["var(--success)"],
                },
                responsive: [{
                    breakpoint: 576,
                    options: {
                        chart: {
                            // width: "100%",
                        },
                        plotOptions: {
                            bar: {
                                columnWidth: '40%',
                            },
                        },
                    }
                }]
            };

            let chartElements = new ApexCharts(document.querySelector("#present_employee"), options);

            chartElements.render();
        };
        // Absent Employee js
        if ($("#absent_employee").length > 0) {
            let options = {
                series: [{
                    name: "Absent Employee",
                    data: [16, 29, 48]
                }],
                chart: {
                    type: 'bar',
                    width: '80px',
                    height: '100px',
                    parentHeightOffset: 0,
                    sparkline: {
                        enabled: true,
                    },
                    toolbar: {
                        show: false,
                    },
                },
                tooltip: {
                    theme: 'light',
                    // theme: 'dark',
                    enabled: true,
                    style: {
                        fontSize: '12px',
                    },
                },
                plotOptions: {
                    bar: {
                        horizontal: false,
                        columnWidth: '30%',
                        barHeight: '100%',
                    },
                },
                grid: {
                    show: false,
                    padding: {
                      top: 0,
                      bottom: 0,
                      left: 0,
                      right: 0,
                    },
                },
                xaxis: {
                    categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                },
                fill: {
                    colors: ["var(--danger)"],
                },
                responsive: [{
                    breakpoint: 576,
                    options: {
                        chart: {
                            // width: "100%",
                        },
                        plotOptions: {
                            bar: {
                                columnWidth: '40%',
                            },
                        },
                    }
                }]
            };

            let chartElements = new ApexCharts(document.querySelector("#absent_employee"), options);

            chartElements.render();
        };
        // Total Employee js
        if ($("#total_employee").length > 0) {
            let options = {
                series: [{
                    name: "Total Employee",
                    data: [1056],
                },{
                    name: "New Employee",
                    data: [370],
                }],
                chart: {
                    type: 'bar',
                    width: '80px',
                    height: '100px',
                    parentHeightOffset: 0,
                    sparkline: {
                        enabled: true,
                    },
                    toolbar: {
                        show: false,
                    },
                },
                tooltip: {
                    theme: 'light',
                    // theme: 'dark',
                    enabled: true,
                    style: {
                        fontSize: '12px',
                    },
                },
                plotOptions: {
                    bar: {
                        horizontal: false,
                        columnWidth: '20%',
                        barHeight: '100%',
                        // distributed: true,
                    },
                },
                grid: {
                    show: false,
                    padding: {
                      top: 0,
                      bottom: 0,
                      left: 0,
                      right: 0,
                    },
                },
                xaxis: {
                    categories: ['Yearly'],
                },
                fill: {
                    colors: ["var(--main-color-two)", "var(--success)"],
                },
                responsive: [{
                    breakpoint: 576,
                    options: {
                        chart: {
                            // width: "100%",
                        },
                        plotOptions: {
                            bar: {
                                columnWidth: '40%',
                            },
                        },
                    }
                }]
            };

            let chartElements = new ApexCharts(document.querySelector("#total_employee"), options);

            chartElements.render();
        };
        // Employee Performance
        if ($("#employeePerformance").length > 0) {
            let options = {
                chart: {
                    type: 'line',
                    // group: 'social',
                    type: 'area',
                    toolbar: {
                      show: false,
                    },
                },
                title: {
                    text: undefined,
                    align: 'left',
                    margin: 0,
                    offsetX: 0,
                    offsetY: 0,
                    style: {
                        fontSize:  '14px',
                        fontWeight:  '600',
                        color:  'var(--paragraph-color)',
                    },
                },
                dataLabels: {
                    enabled: false,
                },
                legend: {
                    markers: {
                        fillColors: "var(--main-color-two)",
                        show: false,
                    },
                },
                tooltip: {
                    theme: 'light',
                    enabled: true,
                    style: {
                        fontSize: '12px',
                    },
                    marker: {
                        fillColors: ["var(--main-color-two)"],
                        shape: "square",
                        show: true,
                    },
                },
                stroke: {
                    curve: 'smooth',
                    colors: "var(--main-color-two)",
                    width: 2,
                },
                markers: {
                    size: 0,
                    show: false,
                    colors: "var(--main-color-two)",
                },
                fill: {
                    colors: "var(--main-color-two)",
                    type: 'gradient',
                    gradient: {
                        shade: 'light',
                        gradientToColors: ['var(--main-color-two)'],
                        shadeIntensity: 1,
                        type: 'vertical',
                        opacityFrom: .8,
                        opacityTo: .01,
                        stops: [0, 100, 100, 100],
                    },
                },
                series: [{
                    name: 'sales',
                    data: [75, 90, 80, 50, 60, 90, 92, 85, 95,],
                }],
                grid: {
                    show: true,
                    borderColor: 'var(--border-color)',
                },
                xaxis: {
                    show: true,
                    categories: ["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8", "W9"],
                    title: {
                        colors: "var(--paragraph-color)",
                    },
                    axisTicks: {
                        show: true,
                    },
                    axisBorder: {
                        show: true,
                        color: "var(--border-color)",
                        width: '1px',
                    },
                    labels: {
                        show: true,
                        style: {
                            colors: "var(--paragraph-color)",
                        }
                    },
                },
                yaxis: {
                    show: true,
                    axisTicks: {
                        show: false,
                    },
                    axisBorder: {
                        show: true,
                        color: "var(--main-color-two)",
                        width: '1px',
                    },
                    labels: {
                        show: true,
                        style: {
                            colors: "var(--paragraph-color)",
                        },
                        formatter: function (value) {
                            return value + "%";
                        }
                    },
                },
                responsive: [{
                    breakpoint: 575,
                    options: {
                        chart: {
                            width: "100%",
                            height: "100%",
                        },
                        legend: {
                            position: 'bottom',
                            itemMargin: {
                                horizontal: 0,
                                vertical: 0,
                            },
                        }
                    }
                }]
            };

            let chartElements = new ApexCharts(document.querySelector("#employeePerformance"), options);

            chartElements.render();
        };
        // Task Analytics js
        if ($("#task_analytics").length > 0) {
            let options = {
                series: [{
                    name: "New Task",
                    data: [44, 55, 57, 56, 61, 58, 63]
                },  {
                    name: "Completed Task",
                    data: [35, 41, 36, 26, 45, 48, 52]
                }],
                chart: {
                    type: 'bar',
                    toolbar: {
                        show: false,
                    }
                },
                title: {
                    align: 'center',
                    text: undefined,
                    style: {
                        fontSize:  '14px',
                        fontWeight:  '600',
                        color:  'var(--paragraph-color)'
                    },
                },
                legend: {
                    markers: {
                        fillColors: ["var(--main-color-two)", "var(--success)"],
                    },
                    itemMargin: {
                        horizontal: 12,
                        vertical: 10,
                    },
                    labels: {
                        colors: "var(--paragraph-color)",
                        useSeriesColors: ["var(--main-color-two)", "var(--success)"],
                    },
                },
                tooltip: {
                    theme: 'light',
                    // theme: 'dark',
                    enabled: true,
                    style: {
                        fontSize: '12px',
                    },
                    marker: {
                        show: true,
                        fillColors: ["var(--main-color-two)", "var(--success)"],
                        shape: "square",
                    },
                },
                plotOptions: {
                    bar: {
                        horizontal: false,
                        columnWidth: '55%',
                        endingShape: 'rounded'
                    },
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    show: true,
                    width: 2,
                    colors: ['transparent']
                },
                grid: {
                    show: true,
                    borderColor: 'var(--border-color)',
                },
                xaxis: {
                    categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                    title: {
                        colors: "var(--paragraph-color)",
                    },
                    axisTicks: {
                        show: false,
                    },
                    axisBorder: {
                        show: false,
                        color: "var(--border-color)",
                        width: '1px',
                    },
                    labels: {
                        style: {
                            colors: "var(--paragraph-color)",
                        }
                    },
                },
                yaxis: {
                    axisTicks: {
                        show: false,
                    },
                    axisBorder: {
                        show: true,
                        color: "var(--border-color)",
                        width: '1px',
                    },
                    labels: {
                        style: {
                            colors: "var(--paragraph-color)",
                        }
                    },
                    title: {
                        text: undefined,
                        style: {
                            color: "var(--paragraph-color)",
                        }
                    },
                },
                fill: {
                    colors: ["var(--main-color-two)", "var(--success)"],
                    opacity: 1
                },
                responsive: [{
                    breakpoint: 575,
                    options: {
                        chart: {
                            // width: "100%",
                        },
                        legend: {
                            position: 'top',
                            itemMargin: {
                                horizontal: 5,
                                vertical: 5,
                            },
                        }
                    }
                }]
            };

            let chartElements = new ApexCharts(document.querySelector("#task_analytics"), options);

            chartElements.render();
        };
        // Employee insights js
        if ($("#employee_insights").length > 0) {
            var options = {
                chart: {
                    type: 'bar',
                    stacked: true,
                    height: '120px',
                    toolbar: {
                        show: false,
                    }
                },
                colors: ['var(--green)', 'var(--review)', 'var(--danger)'],
                series: [{
                name: 'New Recruits',
                data: [160],
              }, {
                name: 'Resignations',
                data: [80],
              }, {
                name: 'Suspensions',
                data: [36],
              }],
              plotOptions: {
                bar: {
                    horizontal: true,
                    height: '30px',
                    dataLabels: {
                        total: {
                            enabled: true,
                            offsetX: 0,
                            style: {
                                fontSize: '13px',
                                fontWeight: 900
                            }
                        }
                    }
                },
              },
              stroke: {
                width: 1,
                colors: ['#fff'],
                show: false,
              },
              grid: {
                show: false,
              },
              title: {
                text: undefined,
              },
              xaxis: {
                axisTicks: {
                    show: false,
                },
                axisBorder: {
                    show: false,
                    color: "var(--border-color)",
                    width: '1px',
                },
                categories: [2023],
                labels: {
                    show: false,
                    border: false,
                    formatter: function (val) {
                        return val + "";
                    },
                }
              },
              yaxis: {
                axisTicks: {
                    show: false,
                },
                axisBorder: {
                    show: false,
                    color: "var(--border-color)",
                    width: '1px',
                },
                title: {
                  text: undefined,
                },
                labels: {
                    show: false,
                }
              },
              tooltip: {
                y: {
                    formatter: function (val) {
                        return val + "";
                    }
                }
              },
              fill: {
                opacity: 1,
                colors: ['var(--green)', 'var(--review)', 'var(--danger)'],
              },
              legend: {
                position: 'top',
                horizontalAlign: 'left',
                offsetX: 0,
                height: '30px',
                labels: {
                    useSeriesColors: ["var(--primary)", "var(--success)"],
                },
              }
            };

            var chart = new ApexCharts(document.querySelector("#employee_insights"), options);
            chart.render();
        };

        /*========================================
            // Chart JS
        ========================================*/
        // Line Charts One
        let lineChartOnejs = null;
        if ($('#line_chartOne').length) {
            lineChartOne();
        }
        function lineChartOne() {
            if(lineChartOnejs){
                lineChartOnejs.destroy();
            }
            if($("#line_chartOne").length < 1) return false;

            const dataLevelOne = [496, 744, 816, 486, 820, 521, 633, 421, 883, 720, 980, 700];
            const dataLevelTwo = [686, 614, 780, 716, 557, 491, 813, 501, 643, 910, 680, 900];
            lineChartOnejs = configure_chart_js({
                source: document.getElementById("line_chartOne"),
                dt_type: "line",
                dt_labels: ['Jan', 'Feb', "Mar", 'Apr', 'May', "Jun", "July", 'Aug', "Sep", 'Oct', 'Nov', 'Dec'],
                dt_datasets: [
                    {
                        data: dataLevelOne,
                        label: "Line Chart",
                        borderColor: cssvar('--main-color-one'),
                        borderWidth: 2,
                        fill: true,
                        backgroundColor: `rgba(${cssvar('--main-color-one-rgb')}, .05)`,
                        pointBorderWidth: 3,
                        pointBackgroundColor: cssvar('--white'),
                        pointRadius: 2,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: cssvar('--main-color-one'),
                        lineTension: .5,
                    }, {
                        data: dataLevelTwo,
                        label: "Line Chart Two",
                        borderColor: cssvar('--primary'),
                        borderWidth: 2,
                        fill: true,
                        backgroundColor: `rgba(${cssvar('--primary-rgb')}, .05)`,
                        pointBorderWidth: 3,
                        pointBackgroundColor: cssvar('--white'),
                        pointRadius: 2,
                        pointHoverRadius: 4,
                        pointHoverBackgroundColor: cssvar('--primary'),
                        lineTension: .5,
                    }
                ]
            });
        }

        // Line Charts Two
        let lineChartTwojs = null;
        if ($('#line_chartTwo').length) {
            lineChartTwo();
        }
        function lineChartTwo() {
            if(lineChartTwojs){
                lineChartTwojs.destroy();
            }
            if($("#line_chartTwo").length < 1) return false;
            lineChartTwojs = configure_chart_js({
                dt_type: "line",
                dt_labels: ['Jan', 'Feb', "Mar", 'Apr', 'May', "Jun", "July", 'Aug', "Sep", 'Oct', 'Nov', 'Dec'],
                source: document.getElementById("line_chartTwo"),
                dt_datasets: [
                    {
                        data: [996, 854, 706, 686, 390, 521, 633, 721, 1083, 1120, 1080, 800],
                        label: "Line Chart",
                        borderColor: cssvar('--main-color-one'),
                        borderWidth: 2,
                        fill: true,
                        pointBorderWidth: 2,
                        pointBackgroundColor: cssvar('--white'),
                        pointRadius: 3,
                        pointHoverRadius: 3,
                        pointHoverBackgroundColor: cssvar('--main-color-one'),
                        backgroundColor: `rgba(${cssvar('--main-color-one-rgb')}, .05)`,
                        lineTension: .8,
                    }
                ]
            });
        }

        // Bar Charts One
        let barChartOneJs = null;
        if ($("#bar_chartOne").length) {
            barChartOne();
        }
        function barChartOne() {
            if(barChartOneJs){
                barChartOneJs.destroy();
            }
            if($("#bar_chartOne").length < 1) return false;
            barChartOneJs = configure_chart_js({
                dt_type: "bar",
                dt_labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                source: document.getElementById("bar_chartOne"),
                dt_datasets: [
                    {
                        label: "Bar One",
                        backgroundColor: cssvar('--main-color-one'),
                        data: [1333, 821, 1983, 478, 2200, 900, 1700],
                        barThickness: 10,
                        hoverBackgroundColor: 'transparent',
                        hoverBorderColor: cssvar('--main-color-one'),
                        borderColor: cssvar('--main-color-one'),
                        borderWidth: 1,
                    }, {
                        label: "Bar Two",
                        backgroundColor: `rgba(${cssvar('--main-color-one-rgb')}, .6)`,
                        data: [708, 1247, 975, 734, 1600, 250, 1300],
                        barThickness: 10,
                        hoverBackgroundColor: 'transparent',
                        hoverBorderColor: `rgba(${cssvar('--main-color-one-rgb')}, .6)`,
                        borderColor: `rgba(${cssvar('--main-color-one-rgb')}, .6)`,
                        borderWidth: 1,
                    }, {
                        label: "Bar Three",
                        backgroundColor: `rgba(${cssvar('--main-color-one-rgb')}, .4)`,
                        data: [1708, 347, 1355, 304, 1200, 700, 2300],
                        barThickness: 10,
                        hoverBackgroundColor: 'transparent',
                        hoverBorderColor: `rgba(${cssvar('--main-color-one-rgb')}, .4)`,
                        borderColor: `rgba(${cssvar('--main-color-one-rgb')}, .4)`,
                        borderWidth: 1,
                    }
                ],
                dt_options: {indexAxis: "y"},
            });
        }
        // Bar Charts Two
        let barChartTwoJs = null;
        if ($("#bar_chartTwo").length) {
            barChartTwo();
        }
        function barChartTwo() {
            if(barChartTwoJs){
                barChartTwoJs.destroy();
            }
            if($("#bar_chartTwo").length < 1) return false;
            barChartTwoJs = configure_chart_js({
                dt_type: "bar",
                dt_labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                source: document.getElementById("bar_chartTwo"),
                dt_datasets: [
                    {
                        label: "Bar One",
                        backgroundColor: cssvar('--main-color-one'),
                        data: [1333, 821, 1983, 478, 2200, 900, 1700],
                        barThickness: 10,
                        hoverBackgroundColor: 'transparent',
                        hoverBorderColor: cssvar('--main-color-one'),
                        borderColor: cssvar('--main-color-one'),
                        borderWidth: 1,
                    }, {
                        label: "Bar Two",
                        backgroundColor: `rgba(${cssvar('--main-color-one-rgb')}, .6)`,
                        data: [708, 1247, 975, 734, 1600, 250, 1300],
                        barThickness: 10,
                        hoverBackgroundColor: 'transparent',
                        hoverBorderColor: `rgba(${cssvar('--main-color-one-rgb')}, .6)`,
                        borderColor: `rgba(${cssvar('--main-color-one-rgb')}, .6)`,
                        borderWidth: 1,
                    }, {
                        label: "Bar Three",
                        backgroundColor: `rgba(${cssvar('--main-color-one-rgb')}, .4)`,
                        data: [1708, 347, 1355, 304, 1200, 700, 2300],
                        barThickness: 10,
                        hoverBackgroundColor: 'transparent',
                        hoverBorderColor: `rgba(${cssvar('--main-color-one-rgb')}, .4)`,
                        borderColor: `rgba(${cssvar('--main-color-one-rgb')}, .4)`,
                        borderWidth: 1,
                    }
                ],
            });
        }

        // donught pie chart one js
        let doughnutPieOneJs = null;
        if ($("#doughnut_pieOne").length) {
            doughnutPieOne();
        }
        function doughnutPieOne() {
            if(doughnutPieOneJs) {
                doughnutPieOneJs.destroy();
            }
            if($("#doughnut_pieOne").length < 1) return false;
            doughnutPieOneJs = configure_chart_js({
                dt_type: "doughnut",
                dt_labels: ["First", "Second", "Third"],
                source: document.getElementById("doughnut_pieOne"),
                dt_datasets: [
                    {
                        data: [45, 20, 30],
                        backgroundColor: [cssvar('--main-color-one'), cssvar('--blue'), cssvar('--orange')],
                        borderColor: 'transparent',
                    }
                ],
                dt_options: {indexAxis: "y"},
            });
        }

        // Doughnut Pie Charts Two
        let doughnutPieTwoJs = null;
        if ($("#doughnut_pieTwo").length) {
            doughnutPieTwo();
        }
        function doughnutPieTwo() {
            if(doughnutPieTwoJs) {
                doughnutPieTwoJs.destroy();
            }
            if($("#doughnut_pieTwo").length < 1) return false;
            doughnutPieTwoJs = configure_chart_js({
                dt_type: "pie",
                dt_labels: ["First", "Second", "Third"],
                backgroundColor: [cssvar('--main-color-one'), cssvar('--primary'), cssvar('--orange')],
                source: document.getElementById("doughnut_pieTwo"),
                dt_datasets: [
                    {
                        data: [45, 20, 30],
                        backgroundColor: [cssvar('--main-color-one'), cssvar('--blue'), cssvar('--orange')],
                        borderColor: 'transparent',
                    }
                ],
            });
        }

        // Mixed Chart One
        let mixedChartOneJs = null;
        if ($("#mixed_chartOne").length) {
            mixedChartOne();
        }
        function mixedChartOne() {
            if(mixedChartOneJs) {
                mixedChartOneJs.destroy();
            }
            if($("#mixed_chartOne").length < 1) return false;
            mixedChartOneJs = configure_chart_js({
                dt_type: "bar",
                dt_labels: ['January', 'February', 'March', 'April', 'May', 'June'],
                backgroundColor: [cssvar('--main-color-one'), cssvar('--primary'), cssvar('--orange')],
                source: document.getElementById("mixed_chartOne"),
                dt_datasets: [
                    {
                        label: 'Bar Dataset',
                        backgroundColor: cssvar('--main-color-one'),
                        data: [10, 20, 30, 40, 50, 70],
                        order: 2,
                    }, {
                        label: 'Line Dataset',
                        borderColor: cssvar('--main-color-one'),
                        borderWidth: 2,
                        fill: true,
                        pointBorderWidth: 2,
                        pointBackgroundColor: cssvar('--white'),
                        pointRadius: 5,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: cssvar('--main-color-one'),
                        backgroundColor: `rgba(${cssvar('--main-color-one-rgb')}, .05)`,
                        lineTension: .9,
                        data: [0, 35, 30, 60, 50, 75],
                        pointStyle: "rectRot",
                        type: 'line',
                        order: 1,
                    }
                ],
            });
        }

        // Scatter Chart One
        let scatterChartOneJs = null;
        if ($("#scatter_chartOne").length) {
            scatterChartOne();
        }
        function scatterChartOne() {
            if(scatterChartOneJs) {
                scatterChartOneJs.destroy();
            }
            if($("#scatter_chartOne").length < 1) return false;
            scatterChartOneJs = configure_chart_js({
                dt_type: "scatter",
                source: document.getElementById("scatter_chartOne"),
                dt_datasets: [
                    {
                        label: 'Scatter One',
                        backgroundColor: cssvar('--main-color-one'),
                        borderWidth: 10,
                        pointBorderWidth: 5,
                        pointStyle: "rectRounded",
                        data: [{
                                x: 1,
                                y: 18,
                            },
                            {
                                x: 12,
                                y: 3,
                            },
                            {
                                x: 17,
                                y: 10,
                            },
                            {
                                x: 8,
                                y: 27,
                            },
                            {
                                x: 13,
                                y: 21,
                            },
                            {
                                x: 6,
                                y: 9,
                            }
                        ],
                    }
                ],
            });
        }

        // PolarArea Chart One
        let polarAreaChartOneJs = null;
        if ($("#polarArea_chartOne").length) {
            polarAreaChartOne();
        }
        function polarAreaChartOne() {
            if(polarAreaChartOneJs) {
                polarAreaChartOneJs.destroy();
            }
            if($("#polarArea_chartOne").length < 1) return false;
            polarAreaChartOneJs = configure_chart_js({
                dt_type: "polarArea",
                dt_labels: ['January', 'February', 'March', 'April'],
                circular: true,
                source: document.getElementById("polarArea_chartOne"),
                dt_datasets: [
                    {
                        labels: 'Polar One',
                        backgroundColor: [cssvar('--main-color-one'), cssvar('--blue'), cssvar('--orange'), cssvar('--purple')],
                        borderColor: 'transparent',
                        lineTension: .9,
                        data: [40, 20, 30, 10],
                    }
                ],
            });
        }

        // Radar Chart One
        let radarChartOneJs = null;
        if ($("#radar_chartOne").length) {
            radarChartOne();
        }
        function radarChartOne() {
            if(radarChartOneJs) {
                radarChartOneJs.destroy();
            }
            if($("#radar_chartOne").length < 1) return false;
            radarChartOneJs = configure_chart_js({
                dt_type: "radar",
                dt_labels: ['January', 'February', 'March', 'April', 'May'],
                source: document.getElementById("radar_chartOne"),
                dt_datasets: [
                    {
                        label: 'Radar One',
                        borderColor: cssvar('--main-color-one'),
                        borderWidth: 3,
                        fill: true,
                        pointBorderWidth: 2,
                        pointBackgroundColor: cssvar('--white'),
                        pointRadius: 5,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: cssvar('--main-color-one'),
                        backgroundColor: `rgba(${cssvar('--main-color-one-rgb')}, .05)`,
                        lineTension: .9,
                        data: [0, 35, 70, 60, 50],
                        type: 'radar',
                    },
                    {
                        label: 'Radar Two',
                        borderColor: cssvar('--primary'),
                        borderWidth: 3,
                        fill: true,
                        pointBorderWidth: 2,
                        pointBackgroundColor: cssvar('--white'),
                        pointRadius: 5,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: cssvar('--primary'),
                        backgroundColor: `rgba(${cssvar('--primary-rgb')}, .05)`,
                        lineTension: .9,
                        data: [20, 45, 60, 30, 70],
                        type: 'radar',
                    }
                ],
            });
        }

        /*========================================
            // Apex Chart JS
        ========================================*/
        // Apex Chart One
        if ($("#apexChart_one").length) {
            let options = {
                chart: {
                    type: 'bar',
                },
                fill: {
                    colors: "var(--main-color-one)",
                },
                series: [{
                    name: 'sales',
                    data: [30, 40, 45, 50, 49, 60, 70, 91, 125, 100],
                }],
                grid: {
                    show: true,
                    borderColor: 'var(--border-color)',
                },
                xaxis: {
                    categories: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct"],
                    axisTicks: {
                        show: false,
                    },
                    axisBorder: {
                        show: false,
                    },
                    labels: {
                        style: {
                            colors: "var(--paragraph-color)",
                        }
                    },
                },
                yaxis: {
                    axisTicks: {
                        show: false,
                    },
                    axisBorder: {
                        show: true,
                        color: "var(--border-color)",
                        width: '1px',
                    },
                    labels: {
                        style: {
                            colors: "var(--paragraph-color)",
                        }
                    },
                },
                plotOptions: {
                    bar: {
                        horizontal: false,
                        borderRadius: 25,
                        colors: {
                            backgroundBarColors: ["var(--search-bg)"],
                            backgroundBarOpacity: 1,
                            backgroundBarRadius: 25,
                            borderRadius: 25,
                        },
                    }
                },
                responsive: [{
                    breakpoint: 575,
                    options: {
                        chart: {
                            // width: "100%",
                        },
                        legend: {
                            position: 'bottom',
                            itemMargin: {
                                horizontal: 5,
                                vertical: 5,
                            },
                        }
                    }
                }]
            }

            let chartElements = new ApexCharts(document.querySelector("#apexChart_one"), options);

            chartElements.render();
        };
        // Apex Chart Two
        if ($("#apexChart_two").length > 0) {
            let options = {
                chart: {
                    type: 'bar'
                },
                fill: {
                    // colors: "var(--blue)",
                    colors: "var(--main-color-one)",
                },
                series: [{
                    name: 'sales',
                    data: [30, 40, 45, 50, 49, 60, 70, 91, 125, 100],
                }],
                grid: {
                    show: true,
                    borderColor: 'var(--border-color)',
                },
                xaxis: {
                    categories: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct"],
                    axisTicks: {
                        show: false,
                    },
                    axisBorder: {
                        show: false,
                        color: "var(--border-color)",
                        width: '1px',
                    },
                    labels: {
                        style: {
                            colors: "var(--paragraph-color)",
                        }
                    },
                },
                yaxis: {
                    axisTicks: {
                        show: false,
                    },
                    axisBorder: {
                        show: true,
                        color: "var(--border-color)",
                        width: '1px',
                    },
                    labels: {
                        style: {
                            colors: "var(--paragraph-color)",
                        }
                    },
                },
                plotOptions: {
                    bar: {
                        horizontal: false,
                        backgroundBarRadius: 20,
                        colors: {
                            backgroundBarColors: [],
                        },
                    }
                },
                responsive: [{
                    breakpoint: 575,
                    options: {
                        chart: {
                            // width: "100%",
                        },
                        legend: {
                            position: 'bottom',
                            itemMargin: {
                                horizontal: 5,
                                vertical: 5,
                            },
                        }
                    }
                }]
            }

            let chartElements = new ApexCharts(document.querySelector("#apexChart_two"), options);

            chartElements.render();
        };
        // Apex Chart Three
        if ($("#apexChart_three").length > 0) {
            let options = {
                chart: {
                    type: 'line',
                    background: "transparent",
                },
                legend: {
                    markers: {
                        fillColors: ["var(--main-color-one)", "var(--primary)"],
                    },
                    itemMargin: {
                        horizontal: 12,
                        vertical: 20,
                    },
                    labels: {
                        colors: "var(--paragraph-color)",
                        useSeriesColors: undefined,
                    },
                },
                tooltip: {
                    // theme: 'light',
                    enabled: true,
                    shared: true,
                    backgroundColor: "var(--white)",
                    style: {
                        fontSize: '12px',
                    },
                    marker: {
                        show: true,
                        fillColors: ["var(--main-color-one)", "var(--primary)"],
                        shape: "square",
                        colors: "var(--paragraph-color)",
                    },
                    labels: {
                        colors: "var(--paragraph-color)",
                    },
                },
                stroke: {
                    curve: 'smooth',
                    width: 5,
                    colors: ["var(--main-color-one)", "var(--primary)"],
                },
                markers: {
                    size: 5,
                    colors: ["var(--main-color-one)", "var(--primary)"],
                    strokeColor: 'var(--primary)',
                },
                fill: {
                    colors: ["var(--main-color-one)", "var(--primary)"],
                },
                series: [{
                        name: 'Bar Chart',
                        type: 'bar',
                        data: [30, 40, 95, 50, 49, 60, 70, 91, 125, 100],
                    },
                    {
                        name: 'Line Chart',
                        type: 'line',
                        data: [40, 35, 85, 60, 49, 70, 65, 97, 115, 110],
                    },
                ],
                grid: {
                    show: true,
                    borderColor: 'var(--border-color)',
                },
                xaxis: {
                    categories: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct"],
                    axisTicks: {
                        show: false,
                    },
                    axisBorder: {
                        show: false,
                        color: "var(--border-color)",
                        width: '1px',
                    },
                    labels: {
                        style: {
                            colors: "var(--paragraph-color)",
                        }
                    },
                },
                yaxis: {
                    axisTicks: {
                        show: false,
                    },
                    axisBorder: {
                        show: true,
                        color: "var(--border-color)",
                        width: '1px',
                    },
                    labels: {
                        style: {
                            colors: "var(--paragraph-color)",
                        }
                    },
                },
                plotOptions: {
                    bar: {
                        horizontal: false,
                        colors: {
                            backgroundBarColors: ["var(--search-bg)"],
                        },
                    }
                },
                responsive: [{
                    breakpoint: 575,
                    options: {
                        chart: {
                            // width: "100%",
                        },
                        legend: {
                            position: 'bottom',
                            itemMargin: {
                                horizontal: 5,
                                vertical: 5,
                            },
                        }
                    }
                }]
            }

            let chartElements = new ApexCharts(document.querySelector("#apexChart_three"), options);

            chartElements.render();
        };
        // Apex Chart Four
        if ($("#apexChart_four").length > 0) {
            let options = {
                chart: {
                    type: 'bar'
                },
                stroke: {
                    curve: 'smooth',
                },
                fill: {
                    colors: "var(--main-color-one)",
                },
                series: [{
                    name: 'sales',
                    data: [30, 40, 95, 50, 49, 60, 70, 91, 125, 100],
                }],
                grid: {
                    show: true,
                    borderColor: 'var(--border-color)',
                },
                xaxis: {
                    categories: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct"],
                    axisTicks: {
                        show: false,
                    },
                    axisBorder: {
                        show: false,
                        color: "var(--border-color)",
                        width: '1px',
                    },
                    labels: {
                        style: {
                            colors: "var(--paragraph-color)",
                        }
                    },
                },
                yaxis: {
                    axisTicks: {
                        show: false,
                    },
                    axisBorder: {
                        show: true,
                        color: "var(--border-color)",
                        width: '1px',
                    },
                    labels: {
                        style: {
                            colors: "var(--paragraph-color)",
                        }
                    },
                },
                plotOptions: {
                    bar: {
                        horizontal: true,
                        colors: {
                            backgroundBarColors: ["var(--search-bg)"],
                            backgroundBarOpacity: 1,
                            backgroundBarRadius: 10,
                        },
                    }
                },
                responsive: [{
                    breakpoint: 575,
                    options: {
                        chart: {
                            // width: "100%",
                        },
                        legend: {
                            position: 'bottom',
                            itemMargin: {
                                horizontal: 5,
                                vertical: 5,
                            },
                        }
                    }
                }]
            }

            let chartElements = new ApexCharts(document.querySelector("#apexChart_four"), options);

            chartElements.render();
        };
        // Apex Chart Five
        if ($("#apexChart_five").length > 0) {
            let options = {
                series: [{
                    data: [21, 22, 10, 28, 16, 21, 13, 30]
                }],
                chart: {
                    type: 'bar',
                },
                plotOptions: {
                    bar: {
                        columnWidth: '40%',
                        distributed: true,
                    }
                },
                dataLabels: {
                    enabled: false,
                },
                legend: {
                    show: false,
                },
                fill: {
                    colors: [
                        "var(--main-color-one)",
                        "var(--primary)",
                        "var(--orange)",
                        "var(--brown)",
                        "var(--green)",
                        "var(--sky)",
                        "var(--pink)",
                        "var(--primary)",
                    ],
                },
                grid: {
                    show: true,
                    borderColor: 'var(--border-color)',
                },
                xaxis: {
                    categories: [
                        ['John Doe'],
                        ['Joe Smith'],
                        ['Jake Williams'],
                        ['Amber'],
                        ['Peter Brown'],
                        ['Mary Evans'],
                        ['David Wilson'],
                        ['Lily Roberts'],
                    ],
                    axisTicks: {
                        show: false,
                    },
                    axisBorder: {
                        show: false,
                        color: "var(--border-color)",
                        width: '1px',
                    },
                    labels: {
                        style: {
                            colors: "var(--paragraph-color)",
                        }
                    },
                },
                yaxis: {
                    axisTicks: {
                        show: false,
                    },
                    axisBorder: {
                        show: true,
                        color: "var(--border-color)",
                        width: '1px',
                    },
                    labels: {
                        style: {
                            colors: "var(--paragraph-color)",
                        }
                    },
                },
                responsive: [{
                    breakpoint: 575,
                    options: {
                        chart: {
                            // width: "100%",
                        },
                        legend: {
                            position: 'bottom',
                            itemMargin: {
                                horizontal: 5,
                                vertical: 5,
                            },
                        }
                    }
                }]
            };

            let chartElements = new ApexCharts(document.querySelector("#apexChart_five"), options);

            chartElements.render();
        };
        // Apex Chart Six
        if ($("#apexChart_six").length > 0) {
            let options = {
                chart: {
                    type: 'line'
                },
                tooltip: {
                    theme: 'light',
                    enabled: true,
                    style: {
                        fontSize: '12px',
                    },
                    marker: {
                        show: true,
                        fillColors: "var(--main-color-one)",
                        strokeColor: 'var(--main-color-one)',
                    },
                },
                stroke: {
                    curve: 'smooth',
                    colors: "var(--main-color-one)",
                },
                markers: {
                    size: 10,
                    colors: "var(--main-color-one)",
                    borderColor: "var(--border-color)",
                    shape: "square",
                },
                fill: {
                    colors: "var(--main-color-one)",
                    type: 'gradient',
                    gradient: {
                        shade: 'light',
                        gradientToColors: ["var(--main-color-one)"],
                        shadeIntensity: 1,
                        type: 'horizontal',
                        opacityFrom: .4,
                        opacityTo: 1,
                        // stops: [0, 100, 100, 100],
                    },
                },
                series: [{
                    name: 'sales',
                    data: [30, 40, 95, 50, 49, 60, 70, 91, 125, 100],
                }],
                grid: {
                    show: true,
                    borderColor: 'var(--border-color)',
                },
                xaxis: {
                    categories: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct"],
                    axisTicks: {
                        show: false,
                    },
                    axisBorder: {
                        show: false,
                        color: "var(--border-color)",
                        width: '1px',
                    },
                    labels: {
                        style: {
                            colors: "var(--paragraph-color)",
                        }
                    },
                },
                yaxis: {
                    axisTicks: {
                        show: false,
                    },
                    axisBorder: {
                        show: true,
                        color: "var(--border-color)",
                        width: '1px',
                    },
                    labels: {
                        style: {
                            colors: "var(--paragraph-color)",
                        }
                    },
                },
                plotOptions: {
                    bar: {
                        horizontal: true,
                        colors: {
                            backgroundBarColors: ["#f3f3f3"],
                        },
                    }
                },
                responsive: [{
                    breakpoint: 575,
                    options: {
                        chart: {
                            // width: "100%",
                        },
                        legend: {
                            position: 'bottom',
                            itemMargin: {
                                horizontal: 5,
                                vertical: 5,
                            },
                        }
                    }
                }]
            };

            let chartElements = new ApexCharts(document.querySelector("#apexChart_six"), options);

            chartElements.render();
        };
        // Apex Chart Seven
        if ($("#apexChart_seven").length > 0) {
            let options = {
                chart: {
                    type: 'line',
                    // group: 'social',
                    type: 'area',
                },
                title: {
                    text: 'Product Sales by Month',
                    align: 'left',
                    style: {
                        fontSize:  '14px',
                        fontWeight:  '600',
                        color:  'var(--paragraph-color)'
                    },
                },
                dataLabels: {
                    enabled: false,
                },
                legend: {
                    markers: {
                        fillColors: "var(--main-color-one)",
                    },
                },
                tooltip: {
                    theme: 'light',
                    enabled: true,
                    style: {
                        fontSize: '12px',
                    },
                    marker: {
                        show: true,
                        fillColors: ["var(--main-color-one)"],
                        shape: "square",
                    },
                },
                stroke: {
                    curve: 'smooth',
                    colors: "var(--main-color-one)",
                },
                markers: {
                    size: 0,
                    show: true,
                    colors: "var(--main-color-one)",
                },
                fill: {
                    colors: "var(--main-color-one)",
                    type: 'gradient',
                    gradient: {
                        shade: 'light',
                        gradientToColors: ['var(--main-color-one)'],
                        shadeIntensity: 1,
                        type: 'vertical',
                        opacityFrom: .8,
                        opacityTo: .01,
                        stops: [0, 100, 100, 100],
                    },
                },
                series: [{
                    name: 'sales',
                    data: [30, 40, 95, 50, 49, 60, 70, 91, 125, 100],
                }],
                grid: {
                    show: true,
                    borderColor: 'var(--border-color)',
                },
                xaxis: {
                    categories: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct"],
                    title: {
                        colors: "var(--paragraph-color)",
                    },
                    axisTicks: {
                        show: false,
                    },
                    axisBorder: {
                        show: false,
                        color: "var(--border-color)",
                        width: '1px',
                    },
                    labels: {
                        style: {
                            colors: "var(--paragraph-color)",
                        }
                    },
                },
                yaxis: {
                    axisTicks: {
                        show: false,
                    },
                    axisBorder: {
                        show: true,
                        color: "var(--border-color)",
                        width: '1px',
                    },
                    labels: {
                        style: {
                            colors: "var(--paragraph-color)",
                        }
                    },
                },
                responsive: [{
                    breakpoint: 575,
                    options: {
                        chart: {
                            // width: "100%",
                        },
                        legend: {
                            position: 'bottom',
                            itemMargin: {
                                horizontal: 5,
                                vertical: 5,
                            },
                        }
                    }
                }]
            };

            let chartElements = new ApexCharts(document.querySelector("#apexChart_seven"), options);

            chartElements.render();
        };
        // Apex Chart Eight
        if ($("#apexChart_eight").length > 0) {
            let options = {
                chart: {
                    type: 'line',
                    type: 'area',
                },
                title: {
                    text: 'Product Sales by Month',
                    align: 'left',
                    style: {
                        fontSize:  '14px',
                        fontWeight:  '600',
                        color:  'var(--paragraph-color)'
                    },
                },
                dataLabels: {
                    enabled: false,
                },
                legend: {
                    markers: {
                        fillColors: ["var(--main-color-one)", "var(--primary)"],
                    },
                    itemMargin: {
                        horizontal: 12,
                        vertical: 20,
                    },
                    labels: {
                        colors: "var(--paragraph-color)",
                        useSeriesColors: undefined,
                    },
                },
                tooltip: {
                    theme: 'light',
                    enabled: true,
                    style: {
                        fontSize: '12px',
                    },
                    marker: {
                        show: true,
                        fillColors: ["var(--main-color-one)", "var(--primary)"],
                        shape: "square",
                    },
                },
                stroke: {
                    curve: 'smooth',
                    colors: ["var(--main-color-one)", "var(--primary)"],
                },
                markers: {
                    size: 5,
                    show: true,
                    colors: ["var(--main-color-one)", "var(--primary)"],
                },
                fill: {
                    colors: ["var(--main-color-one)", "var(--primary)"],
                    type: 'gradient',
                    gradient: {
                        shade: 'light',
                        gradientToColors: ['var(--main-color-one)', "var(--primary)"],
                        shadeIntensity: 1,
                        type: 'horizontal',
                        opacityFrom: .3,
                        opacityTo: .8,
                        stops: [0, 100, 100, 100],
                    },
                },
                series: [{
                        name: 'Sales One',
                        data: [30, 40, 95, 50, 49, 60, 70, 91, 125, 100],
                    },
                    {
                        name: 'Sales Two',
                        data: [11, 32, 45, 32, 34, 52, 41, 54, 16, 76]
                    }
                ],
                grid: {
                    show: true,
                    borderColor: 'var(--border-color)',
                },
                xaxis: {
                    categories: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct"],
                    title: {
                        colors: "var(--paragraph-color)",
                    },
                    axisTicks: {
                        show: false,
                    },
                    axisBorder: {
                        show: false,
                        color: "var(--border-color)",
                        width: '1px',
                    },
                    labels: {
                        style: {
                            colors: "var(--paragraph-color)",
                        }
                    },
                },
                yaxis: {
                    axisTicks: {
                        show: false,
                    },
                    axisBorder: {
                        show: true,
                        color: "var(--border-color)",
                        width: '1px',
                    },
                    labels: {
                        style: {
                            colors: "var(--paragraph-color)",
                        }
                    },
                },
                responsive: [{
                    breakpoint: 575,
                    options: {
                        chart: {
                            // width: "100%",
                        },
                        legend: {
                            position: 'bottom',
                            itemMargin: {
                                horizontal: 5,
                                vertical: 5,
                            },
                        }
                    }
                }]
            };

            let chartElements = new ApexCharts(document.querySelector("#apexChart_eight"), options);

            chartElements.render();
        };
        // Apex Chart Nine
        if ($("#apexChart_nine").length > 0) {
            let options = {
                series: [{
                    name: 'Net Profit',
                    data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
                }, {
                    name: 'Revenue',
                    data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
                }, {
                    name: 'Free Cash Flow',
                    data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
                }],
                chart: {
                    type: 'bar',
                },
                title: {
                    align: 'center',
                    text: "Bar Chart",
                    style: {
                        fontSize:  '14px',
                        fontWeight:  '600',
                        color:  'var(--paragraph-color)'
                    },
                },
                legend: {
                    markers: {
                        fillColors: ["var(--main-color-one)", "rgba(var(--main-color-one-rgb), .6)", "rgba(var(--main-color-one-rgb), .4)"],
                    },
                    itemMargin: {
                        horizontal: 12,
                        vertical: 20,
                    },
                    labels: {
                        colors: "var(--paragraph-color)",
                        useSeriesColors: undefined,
                    },
                },
                tooltip: {
                    theme: 'light',
                    // theme: 'dark',
                    enabled: true,
                    style: {
                        fontSize: '12px',
                    },
                    marker: {
                        show: true,
                        fillColors: ["var(--main-color-one)", "rgba(var(--main-color-one-rgb), .6)", "rgba(var(--main-color-one-rgb), .4)"],
                        shape: "square",
                    },
                },
                plotOptions: {
                    bar: {
                        horizontal: false,
                        columnWidth: '55%',
                        endingShape: 'rounded'
                    },
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    show: true,
                    width: 2,
                    colors: ['transparent']
                },
                grid: {
                    show: true,
                    borderColor: 'var(--border-color)',
                },
                xaxis: {
                    categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
                    title: {
                        colors: "var(--paragraph-color)",
                    },
                    axisTicks: {
                        show: false,
                    },
                    axisBorder: {
                        show: false,
                        color: "var(--border-color)",
                        width: '1px',
                    },
                    labels: {
                        style: {
                            colors: "var(--paragraph-color)",
                        }
                    },
                },
                yaxis: {
                    axisTicks: {
                        show: false,
                    },
                    axisBorder: {
                        show: true,
                        color: "var(--border-color)",
                        width: '1px',
                    },
                    labels: {
                        style: {
                            colors: "var(--paragraph-color)",
                        }
                    },
                    title: {
                        text: '$ (thousands)',
                        style: {
                            color: "var(--paragraph-color)",
                        }
                    },
                },
                fill: {
                    colors: ["var(--main-color-one)", "rgba(var(--main-color-one-rgb), .6)", "rgba(var(--main-color-one-rgb), .4)"],
                    opacity: 1
                },
                tooltip: {
                    y: {
                        formatter: function(val) {
                            return "$ " + val + " thousands"
                        }
                    }
                },
                responsive: [{
                    breakpoint: 575,
                    options: {
                        chart: {
                            // width: "100%",
                        },
                        legend: {
                            position: 'bottom',
                            itemMargin: {
                                horizontal: 5,
                                vertical: 5,
                            },
                        }
                    }
                }]
            };

            let chartElements = new ApexCharts(document.querySelector("#apexChart_nine"), options);

            chartElements.render();
        };
        // Apex Chart Ten
        if ($("#apexChart_ten").length > 0) {
            let options = {
                series: [{
                    name: 'Net Profit',
                    data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
                }, {
                    name: 'Revenue',
                    data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
                }, {
                    name: 'Free Cash Flow',
                    data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
                }],
                chart: {
                    type: 'bar',
                },
                title: {
                    align: 'center',
                    text: "Bar Chart",
                    style: {
                        fontSize:  '14px',
                        fontWeight:  '600',
                        color:  'var(--paragraph-color)'
                    },
                },
                legend: {
                    markers: {
                        fillColors: ["var(--main-color-one)", "rgba(var(--main-color-one-rgb), .6)", "rgba(var(--main-color-one-rgb), .4)"],
                    },
                    itemMargin: {
                        horizontal: 12,
                        vertical: 20,
                    },
                    labels: {
                        colors: "var(--paragraph-color)",
                        useSeriesColors: undefined,
                    },
                },
                tooltip: {
                    theme: 'light',
                    enabled: true,
                    style: {
                        fontSize: '12px',
                    },
                    marker: {
                        show: true,
                        fillColors: ["var(--main-color-one)", "rgba(var(--main-color-one-rgb), .6)", "rgba(var(--main-color-one-rgb), .4)"],
                    },
                },
                plotOptions: {
                    bar: {
                        horizontal: true,
                        columnWidth: '100%',
                        endingShape: 'rounded',
                    },
                },
                dataLabels: {
                    enabled: false,
                },
                stroke: {
                    show: true,
                    width: 2,
                    colors: ['transparent'],
                },
                grid: {
                    show: true,
                    borderColor: 'var(--border-color)',
                },
                xaxis: {
                    categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
                    title: {
                        colors: "var(--paragraph-color)",
                    },
                    axisTicks: {
                        show: false,
                    },
                    axisBorder: {
                        show: false,
                        color: "var(--border-color)",
                        width: '1px',
                    },
                    labels: {
                        style: {
                            colors: "var(--paragraph-color)",
                        }
                    },
                },
                yaxis: {
                    axisTicks: {
                        show: false,
                    },
                    axisBorder: {
                        show: true,
                        color: "var(--border-color)",
                        width: '1px',
                    },
                    labels: {
                        style: {
                            colors: "var(--paragraph-color)",
                        }
                    },
                    title: {
                        text: '$ (thousands)',
                        style: {
                            color: "var(--paragraph-color)",
                        }
                    },
                },
                fill: {
                    colors: ["var(--main-color-one)", "rgba(var(--main-color-one-rgb), .6)", "rgba(var(--main-color-one-rgb), .4)"],
                    opacity: 1,
                },
                tooltip: {
                    y: {
                        formatter: function(val) {
                            return "$ " + val + " thousands"
                        },
                    }
                },
                responsive: [{
                    breakpoint: 575,
                    options: {
                        chart: {
                            // width: "100%",
                        },
                        legend: {
                            position: 'bottom',
                            itemMargin: {
                                horizontal: 5,
                                vertical: 5,
                            },
                        }
                    }
                }]
            };

            let chartElements = new ApexCharts(document.querySelector("#apexChart_ten"), options);

            chartElements.render();
        };
        // Apex Chart Eleven
        if ($("#apexChart_eleven").length > 0) {
            let options = {
                series: [44, 55, 13, 43, 22],
                chart: {
                    type: 'pie',
                },
                labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
                dataLabels: {
                    enabled: true,
                },
                title: {
                    align: 'center',
                    text: "Doughnut Chart",
                    style: {
                        fontSize:  '14px',
                        fontWeight:  '600',
                        color:  'var(--paragraph-color)'
                    },
                },
                legend: {
                    position: 'bottom',
                    show: true,
                    markers: {
                        fillColors: ["var(--main-color-one)", "var(--primary)", "var(--orange)", "var(--brown)", "var(--green)"],
                    },
                    itemMargin: {
                        horizontal: 12,
                        vertical: 20,
                    },
                    labels: {
                        colors: "var(--paragraph-color)",
                        useSeriesColors: undefined,
                    },
                },
                grid: {
                    borderColor: 'var(--border-color)',
                },
                stroke:{
                    colors:['var(--border-color)']
                },
                plotOptions: {
                    bar: {
                        distributed: false,
                    }
                },
                colors: ["var(--main-color-one)", "var(--primary)", "var(--orange)", "var(--brown)", "var(--green)"],
                fill: {
                    colors: ["var(--main-color-one)", "var(--primary)", "var(--orange)", "var(--brown)", "var(--green)"],
                },
                responsive: [{
                    breakpoint: 575,
                    options: {
                        chart: {
                            // width: "100%",
                        },
                        legend: {
                            position: 'bottom',
                            itemMargin: {
                                horizontal: 5,
                                vertical: 5,
                            },
                        }
                    }
                }]
            };

            let chartElements = new ApexCharts(document.querySelector("#apexChart_eleven"), options);

            chartElements.render();
        };
        // Apex Chart Twelve
        if ($("#apexChart_twelve").length > 0) {
            let options = {
                series: [44, 55, 13, 43, 22],
                chart: {
                    type: 'donut',
                    // foreColor: "var(--paragraph-color)"
                },
                grid: {
                    borderColor: "#000"
                },
                stroke:{
                    colors:['var(--border-color)']
                },
                labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
                dataLabels: {
                    enabled: true,
                },
                title: {
                    align: 'center',
                    text: "Pie Chart",
                    style: {
                        fontSize:  '14px',
                        fontWeight:  '600',
                        color:  'var(--paragraph-color)'
                    },
                },
                legend: {
                    position: 'bottom',
                    show: true,
                    markers: {
                        fillColors: ["var(--main-color-one)", "var(--primary)", "var(--orange)", "var(--brown)", "var(--green)"],
                    },
                    itemMargin: {
                        horizontal: 12,
                        vertical: 20,
                    },
                    labels: {
                        colors: "var(--paragraph-color)",
                        useSeriesColors: undefined,
                    },
                },
                grid: {
                    borderColor: 'var(--border-color)',
                },
                plotOptions: {
                    bar: {
                        distributed: false,
                    }
                },
                colors: ["var(--main-color-one)", "var(--primary)", "var(--orange)", "var(--brown)", "var(--green)"],
                fill: {
                    colors: ["var(--main-color-one)", "var(--primary)", "var(--orange)", "var(--brown)", "var(--green)"],
                },
                responsive: [{
                    breakpoint: 575,
                    options: {
                        chart: {
                            // width: "100%",
                        },
                        legend: {
                            position: 'bottom',
                            itemMargin: {
                                horizontal: 5,
                                vertical: 5,
                            },
                        }
                    }
                }],
            };

            let chartElements = new ApexCharts(document.querySelector("#apexChart_twelve"), options);

            chartElements.render();
        };
        // Apex Chart Thirteen
        if ($("#apexChart_thirteen").length > 0) {
            let options = {
                series: [44, 37, 23, 43, 28, 35, 19],
                chart: {
                    type: 'pie',
                },
                labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                colors: ["var(--main-color-one)", "var(--primary)", "var(--orange)", "var(--brown)", "var(--green)", "var(--sky)", "var(--pink)"],
                fill: {
                    colors: ["var(--main-color-one)", "var(--primary)", "var(--orange)", "var(--brown)", "var(--green)", "var(--sky)", "var(--pink)"],
                },
                theme: {
                    mode: 'light',
                    palette: 'palette10',
                    radius: 15,
                    monochrome: {
                        enabled: false,
                        color: '#555',
                        shadeTo: 'light',
                        shadeIntensity: 0.9,
                    },
                },
                title: {
                    align: 'center',
                    text: "Monochrome Pie",
                    style: {
                        fontSize:  '14px',
                        fontWeight:  '600',
                        color:  'var(--paragraph-color)',
                    },
                },
                dataLabels: {
                    formatter: function(val, opts) {
                        return [val.toFixed(1) + '%'];
                    },
                },
                legend: {
                    position: 'bottom',
                    show: true,
                    itemMargin: {
                        horizontal: 12,
                        vertical: 12,
                    },
                    labels: {
                        colors: "var(--paragraph-color)",
                        useSeriesColors: undefined,
                    },
                },
                grid: {
                    borderColor: "var(--border-color)",
                },
                stroke:{
                    colors:['var(--border-color)']
                },
                plotOptions: {
                    pie: {
                        dataLabels: {
                            offset: -5,
                        }
                    }
                },
                responsive: [{
                    breakpoint: 575,
                    options: {
                        chart: {
                            // width: "100%",
                        },
                        legend: {
                            position: 'bottom',
                            itemMargin: {
                                horizontal: 5,
                                vertical: 5,
                            },
                        }
                    }
                }]
            };

            let chartElements = new ApexCharts(document.querySelector("#apexChart_thirteen"), options);

            chartElements.render();
        };
        // Apex Chart Fourteen
        if ($("#apexChart_fourteen").length > 0) {
            let options = {
                series: [44, 37, 23, 43, 28, 35, 19],
                chart: {
                    type: 'pie',
                },
                labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                colors: ["var(--main-color-one)", "var(--primary)", "var(--orange)", "var(--brown)", "var(--green)", "var(--sky)", "var(--pink)"],
                fill: {
                    colors: ["var(--main-color-one)", "var(--primary)", "var(--orange)", "var(--brown)", "var(--green)", "var(--sky)", "var(--pink)"],
                },
                theme: {
                    mode: 'light',
                    palette: 'palette10',
                    radius: 15,
                    monochrome: {
                        enabled: false,
                        color: '#555',
                        shadeTo: 'light',
                        shadeIntensity: 0.9,
                    },
                },
                title: {
                    align: 'center',
                    text: "Semi donut",
                    style: {
                        fontSize: "14px",
                        fontWeight: "600",
                        color: "var(--paragraph-color)",
                    }
                },
                dataLabels: {
                    // formatter: function(val, opts) {
                    //     return [val.toFixed(1) + '%'];
                    // },
                },
                legend: {
                    position: 'bottom',
                    show: true,
                    itemMargin: {
                        horizontal: 12,
                        vertical: 12,
                    },
                    labels: {
                        colors: "var(--paragraph-color)",
                        useSeriesColors: undefined,
                    },
                },
                plotOptions: {
                    pie: {
                        startAngle: -90,
                        endAngle: 90,
                        offsetY: 10
                    }
                },
                stroke:{
                    colors:['var(--border-color)']
                },
                grid: {
                    borderColor: "var(--border-color)",
                    padding: {
                        bottom: -100
                    }
                },
                responsive: [{
                    breakpoint: 575,
                    options: {
                        chart: {
                            // width: "100%",
                        },
                        legend: {
                            position: 'bottom',
                            itemMargin: {
                                horizontal: 5,
                                vertical: 5,
                            },
                        }
                    }
                }]
            };

            let chartElements = new ApexCharts(document.querySelector("#apexChart_fourteen"), options);

            chartElements.render();
        };
        // Apex Chart Fifteen
        if ($("#apexChart_fifteen").length > 0) {
            let options = {
                series: [44, 37, 23, 43, 28, 35, 19],
                chart: {
                    type: 'donut',
                },
                labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                colors: ["var(--main-color-one)", "var(--primary)", "var(--orange)", "var(--brown)", "var(--green)", "var(--sky)", "var(--pink)"],
                fill: {
                    colors: ["var(--main-color-one)", "var(--primary)", "var(--orange)", "var(--brown)", "var(--green)", "var(--sky)", "var(--pink)"],
                },
                theme: {
                    mode: 'light',
                    palette: 'palette10',
                    radius: 15,
                    monochrome: {
                        enabled: false,
                        color: '#555',
                        shadeTo: 'light',
                        shadeIntensity: 0.9,
                    },
                },
                title: {
                    align: 'center',
                    text: "Semi donut",
                    style: {
                        fontSize: "14px",
                        fontWeight: "600",
                        color: "var(--paragraph-color)",
                    }
                },
                dataLabels: {
                    formatter: function(val, opts) {
                        return [val.toFixed(1) + '%'];
                    },
                },
                legend: {
                    position: 'bottom',
                    show: true,
                    itemMargin: {
                        horizontal: 12,
                        vertical: 12,
                    },
                    labels: {
                        colors: "var(--paragraph-color)",
                        useSeriesColors: undefined,
                    },
                },
                plotOptions: {
                    pie: {
                        startAngle: -90,
                        endAngle: 90,
                        offsetY: 10
                    }
                },
                grid: {
                    borderColor: "var(--border-color)",
                    padding: {
                        bottom: -150
                    }
                },
                stroke:{
                    colors:['var(--border-color)']
                },
                responsive: [{
                    breakpoint: 575,
                    options: {
                        chart: {
                            // width: "100%",
                        },
                        legend: {
                            position: 'bottom',
                            itemMargin: {
                                horizontal: 5,
                                vertical: 5,
                            },
                        }
                    }
                }]
            };

            let chartElements = new ApexCharts(document.querySelector("#apexChart_fifteen"), options);

            chartElements.render();
        };
        // Apex Chart Sixteen
        if ($("#apexChart_sixteen").length > 0) {
            let options = {
                series: [44, 37, 23, 43, 28, 35, 19],
                chart: {
                    type: 'donut',
                },
                labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                colors: ["var(--main-color-one)", "var(--primary)", "var(--orange)", "var(--brown)", "var(--green)", "var(--sky)", "var(--pink)"],
                fill: {
                    colors: ["var(--main-color-one)", "var(--primary)", "var(--orange)", "var(--brown)", "var(--green)", "var(--sky)", "var(--pink)"],
                },
                theme: {
                    mode: 'light',
                    palette: 'palette10',
                    radius: 15,
                    monochrome: {
                        enabled: false,
                        color: '#555',
                        shadeTo: 'light',
                        shadeIntensity: 0.9,
                    },
                },
                title: {
                    align: 'center',
                    text: "Semi donut",
                    style: {
                        fontSize: "14px",
                        fontWeight: "600",
                        color: "var(--paragraph-color)",
                    }
                },
                dataLabels: {
                    formatter: function(val, opts) {
                        return [val.toFixed(1) + '%'];
                    },
                },
                legend: {
                    position: 'bottom',
                    show: true,
                    itemMargin: {
                        horizontal: 12,
                        vertical: 12,
                    },
                    labels: {
                        colors: "var(--paragraph-color)",
                        useSeriesColors: undefined,
                    },
                },
                plotOptions: {
                    pie: {
                        startAngle: 180,
                        endAngle: -180,
                        offsetY: 10
                    }
                },
                grid: {
                    borderColor: "var(--border-color)",
                    padding: {
                        bottom: 10
                    }
                },
                stroke:{
                    colors:['var(--border-color)']
                },
                responsive: [{
                    breakpoint: 575,
                    options: {
                        chart: {
                            // width: "100%",
                        },
                        legend: {
                            position: 'bottom',
                            itemMargin: {
                                horizontal: 5,
                                vertical: 5,
                            },
                        }
                    }
                }]
            };

            let chartElements = new ApexCharts(document.querySelector("#apexChart_sixteen"), options);

            chartElements.render();
        };
        // Apex Chart Seventeen
        if ($("#apexChart_seventeen").length > 0) {
            let options = {
                series: [{
                    name: 'Radar 1',
                    data: [80, 50, 30, 40, 100, 20],
                }, {
                    name: 'Radar 2',
                    data: [20, 30, 40, 80, 20, 80],
                }, {
                    name: 'Radar 3',
                    data: [44, 76, 78, 13, 43, 10],
                }],
                chart: {
                    type: 'radar',
                },
                labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                title: {
                    text: "Radar Chart - Multi Series",
                    align: "center",
                    style: {
                        fontSize: "14px",
                        fontWeight: "600",
                        color: "var(--paragraph-color)",
                    }
                },
                legend: {
                    position: "bottom",
                    show: true,
                    itemMargin: {
                        horizontal: 12,
                        vertical: 12,
                    },
                    labels: {
                        colors: "var(--paragraph-color)",
                        useSeriesColors: undefined,
                    },
                },
                grid: {
                    borderColor: "var(--border-color)",
                },
                stroke:{
                    colors:['var(--border-color)']
                },
                colors: ["var(--main-color-one)", "var(--primary)", "var(--orange)", "var(--brown)", "var(--green)", "var(--sky)", "var(--pink)"],
                fill: {
                    colors: ["var(--main-color-one)", "var(--primary)", "var(--orange)", "var(--brown)", "var(--green)", "var(--sky)", "var(--pink)"],
                },
                responsive: [{
                    breakpoint: 575,
                    options: {
                        chart: {
                            // width: "100%",
                        },
                        legend: {
                            position: 'bottom',
                            show: false,
                            itemMargin: {
                                horizontal: 5,
                                vertical: 5,
                            },
                        }
                    }
                }]
            };

            let chartElements = new ApexCharts(document.querySelector("#apexChart_seventeen"), options);

            chartElements.render();
        };
        // Apex Chart Eighteen
        if ($("#apexChart_eighteen").length > 0) {
            let options = {
                series: [{
                        name: 'Desktops',
                        data: [{
                                x: 'ABC',
                                y: 10
                            },
                            {
                                x: 'DEF',
                                y: 60
                            },
                            {
                                x: 'XYZ',
                                y: 41
                            },
                            {
                                x: 'RHL',
                                y: 32
                            },
                        ]
                    },
                    {
                        name: 'Mobile',
                        data: [{
                                x: 'ABCD',
                                y: 10
                            },
                            {
                                x: 'DEFG',
                                y: 20
                            },
                            {
                                x: 'WXYZ',
                                y: 51
                            },
                            {
                                x: 'PQR',
                                y: 30
                            },
                            {
                                x: 'MNO',
                                y: 20
                            },
                            {
                                x: 'CDE',
                                y: 30
                            }
                        ]
                    }
                ],
                legend: {
                    show: true,
                    itemMargin: {
                        horizontal: 12,
                        vertical: 12,
                    },
                    labels: {
                        colors: "var(--paragraph-color)",
                    }
                },
                chart: {
                    type: 'treemap',
                },
                title: {
                    text: 'Distibuted Treemap (different color for each cell)',
                    align: 'center',
                    style: {
                        fontSize: "14px",
                        fontWeight: "600",
                        color: "var(--paragraph-color)",
                    }
                },
                colors: ["var(--main-color-one)", "var(--primary)", "var(--orange)", "var(--brown)", "var(--green)", "var(--sky)", "var(--pink)"],
                fill: {
                    colors: ["var(--main-color-one)", "var(--primary)", "var(--orange)", "var(--brown)", "var(--green)", "var(--sky)", "var(--pink)"],
                },
                grid: {
                    borderColor: "var(--border-color)",
                },
                stroke:{
                    colors:['var(--border-color)']
                },
                plotOptions: {
                    treemap: {
                        distributed: true,
                        enableShades: false,
                    }
                },
                responsive: [{
                    breakpoint: 575,
                    options: {
                        chart: {
                            // width: "100%",
                        },
                        legend: {
                            position: 'bottom',
                            itemMargin: {
                                horizontal: 5,
                                vertical: 5,
                            },
                        }
                    }
                }]
            };

            let chartElements = new ApexCharts(document.querySelector("#apexChart_eighteen"), options);

            chartElements.render();
        };
        // Apex Chart Eighteen
        if ($("#apexChart_nineteen").length > 0) {
            let options = {
                series: [83],
                chart: {
                    type: "radialBar",
                },
                title: {
                    text: "RadialBar/Circle Chart",
                    align: "center",
                    style: {
                        fontSize: "14px",
                        fontWeight: "600",
                        color: "var(--paragraph-color)",
                    }
                },
                plotOptions: {
                    radialBar: {
                        dataLabels: {
                            name: {
                                fontSize: '24px',
                                color: "var(--main-color-one)",
                            },
                            value: {
                                fontSize: '18px',
                                color: "var(--paragraph-color)",
                            },
                        }
                    }
                },
                labels: ["Football"],
                legend: {
                    position: "bottom",
                    show: true,
                    itemMargin: {
                        horizontal: 12,
                        vertical: 12,
                    },
                    labels: {
                        colors: "var(--paragraph-color)"
                    }
                },
                colors: ["var(--main-color-one)"],
                fill: {
                    colors: ["var(--main-color-one)"],
                },
                responsive: [{
                    breakpoint: 575,
                    options: {
                        chart: {
                            // width: "100%",
                        },
                        legend: {
                            position: 'bottom',
                            itemMargin: {
                                horizontal: 5,
                                vertical: 5,
                            },
                        }
                    }
                }]
            };

            let chartElements = new ApexCharts(document.querySelector("#apexChart_nineteen"), options);

            chartElements.render();
        };
        // Apex Chart Twenty
        if ($("#apexChart_twenty").length > 0) {
            let options = {
                series: [44, 60, 67, 83, 45],
                chart: {
                    type: "radialBar",
                },
                title: {
                    text: "RadialBar/Circle Chart",
                    align: "center",
                    style: {
                        fontSize: "14px",
                        fontWeight: "600",
                        color: "var(--paragraph-color)",
                    }
                },
                plotOptions: {
                    radialBar: {
                        dataLabels: {
                            name: {
                                fontSize: '32px',
                                color: "var(--heading-color)",
                            },
                            value: {
                                fontSize: '20px',
                                color: "var(--paragraph-color)",
                            },
                            total: {
                                show: true,
                                label: 'Total',
                                formatter: function(w) {
                                    // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                                    return 300;
                                }
                            }
                        }
                    }
                },
                labels: ["Football", "Cricket", "Chess", "Basket Ball", "Tennis"],
                legend: {
                    position: "bottom",
                    show: true,
                    itemMargin: {
                        horizontal: 12,
                        vertical: 12,
                    },
                    labels: {
                        colors: "var(--paragraph-color)",
                    }
                },
                colors: ["var(--main-color-one)", "var(--primary)", "var(--orange)", "var(--brown)", "var(--green)", "var(--sky)", "var(--pink)"],
                fill: {
                    colors: ["var(--main-color-one)", "var(--primary)", "var(--orange)", "var(--brown)", "var(--green)", "var(--sky)", "var(--pink)"],
                },
                responsive: [{
                    breakpoint: 575,
                    options: {
                        chart: {
                            // width: "100%",
                        },
                        legend: {
                            position: 'bottom',
                            itemMargin: {
                                horizontal: 5,
                                vertical: 5,
                            },
                        }
                    }
                }]
            };

            let chartElements = new ApexCharts(document.querySelector("#apexChart_twenty"), options);

            chartElements.render();
        };

        /*
        ========================================
            Global Slider Init
        ========================================
        */
        var globalSlickInit = $('.global-slick-init');
        if (globalSlickInit.length > 0) {
            //todo have to check slider item
            $.each(globalSlickInit, function(index, value) {
                if ($(this).children('div').length > 1) {
                    //todo configure slider settings object
                    var sliderSettings = {};
                    var allData = $(this).data();
                    var infinite = typeof allData.infinite == 'undefined' ? false : allData.infinite;
                    var arrows = typeof allData.arrows == 'undefined' ? false : allData.arrows;
                    var autoplay = typeof allData.autoplay == 'undefined' ? false : allData.autoplay;
                    var focusOnSelect = typeof allData.focusonselect == 'undefined' ? false : allData.focusonselect;
                    var swipeToSlide = typeof allData.swipetoslide == 'undefined' ? false : allData.swipetoslide;
                    var slidesToShow = typeof allData.slidestoshow == 'undefined' ? 1 : allData.slidestoshow;
                    var slidesToScroll = typeof allData.slidestoscroll == 'undefined' ? 1 : allData.slidestoscroll;
                    var speed = typeof allData.speed == 'undefined' ? '500' : allData.speed;
                    var dots = typeof allData.dots == 'undefined' ? false : allData.dots;
                    var cssEase = typeof allData.cssease == 'undefined' ? 'linear' : allData.cssease;
                    var prevArrow = typeof allData.prevarrow == 'undefined' ? '' : allData.prevarrow;
                    var nextArrow = typeof allData.nextarrow == 'undefined' ? '' : allData.nextarrow;
                    var centerMode = typeof allData.centermode == 'undefined' ? false : allData.centermode;
                    var centerPadding = typeof allData.centerpadding == 'undefined' ? false : allData.centerpadding;
                    var rows = typeof allData.rows == 'undefined' ? 1 : parseInt(allData.rows);
                    var autoplay = typeof allData.autoplay == 'undefined' ? false : allData.autoplay;
                    var autoplaySpeed = typeof allData.autoplayspeed == 'undefined' ? 2000 : parseInt(allData.autoplayspeed);
                    var lazyLoad = typeof allData.lazyload == 'undefined' ? false : allData.lazyload; // have to remove it from settings object if it undefined
                    var appendDots = typeof allData.appenddots == 'undefined' ? false : allData.appenddots;
                    var appendArrows = typeof allData.appendarrows == 'undefined' ? false : allData.appendarrows;
                    var asNavFor = typeof allData.asnavfor == 'undefined' ? false : allData.asnavfor;
                    var pauseOnHover = typeof allData.pauseonhover == 'undefined' ? false : allData.pauseonhover;
                    var verticalSwiping = typeof allData.verticalswiping == 'undefined' ? false : allData.verticalswiping;
                    var vertical = typeof allData.vertical == 'undefined' ? false : allData.vertical;
                    var fade = typeof allData.fade == 'undefined' ? false : allData.fade;
                    var rtl = typeof allData.rtl == 'undefined' ? false : allData.rtl;
                    var responsive = typeof $(this).data('responsive') == 'undefined' ? false : $(this).data('responsive');
                    //slider settings object setup
                    sliderSettings.infinite = infinite;
                    sliderSettings.arrows = arrows;
                    sliderSettings.autoplay = autoplay;
                    sliderSettings.focusOnSelect = focusOnSelect;
                    sliderSettings.swipeToSlide = swipeToSlide;
                    sliderSettings.slidesToShow = slidesToShow;
                    sliderSettings.slidesToScroll = slidesToScroll;
                    sliderSettings.speed = speed;
                    sliderSettings.dots = dots;
                    sliderSettings.cssEase = cssEase;
                    sliderSettings.prevArrow = prevArrow;
                    sliderSettings.nextArrow = nextArrow;
                    sliderSettings.rows = rows;
                    sliderSettings.autoplaySpeed = autoplaySpeed;
                    sliderSettings.autoplay = autoplay;
                    sliderSettings.verticalSwiping = verticalSwiping;
                    sliderSettings.vertical = vertical;
                    sliderSettings.rtl = rtl;
                    if (centerMode != false) {
                        sliderSettings.centerMode = centerMode;
                    }
                    if (centerPadding != false) {
                        sliderSettings.centerPadding = centerPadding;
                    }
                    if (lazyLoad != false) {
                        sliderSettings.lazyLoad = lazyLoad;
                    }
                    if (appendDots != false) {
                        sliderSettings.appendDots = appendDots;
                    }
                    if (appendArrows != false) {
                        sliderSettings.appendArrows = appendArrows;
                    }
                    if (asNavFor != false) {
                        sliderSettings.asNavFor = asNavFor;
                    }
                    if (pauseOnHover != false) {
                        sliderSettings.pauseOnHover = pauseOnHover;
                    }
                    if (fade != false) {
                        sliderSettings.fade = fade;
                    }
                    if (responsive != false) {
                        sliderSettings.responsive = responsive;
                    }
                    $(this).slick(sliderSettings);
                }
            });
        }

    });

    /*========================================
        preloader
    ========================================*/
    $(window).on('load', function() {
        $('#preloader').delay(0).fadeOut('fast');
    });

    /*
    ========================================
        Line ProgressBar Js
    ========================================
    */
    window.addEventListener('load', () => {
        let progressBars = document.querySelectorAll('.progress__item__main');
        progressBars.forEach((progress, index) => {
            progress.style.width = progress.getAttribute('data-percent') + '%';
        });
    });

    /*
    ========================================
        Full Screen Mode Js
    ========================================
    */

    $(document).on('click','#fullScreen_mode', function() {
        let fullScreenMode = document.querySelector("#fullScreen_mode .material-symbols-outlined");

        if ((document.fullScreenElement && document.fullScreenElement !== null) ||
            (!document.mozFullScreen && !document.webkitIsFullScreen)) {
                fullScreenMode.textContent = 'fullscreen';
            if (document.documentElement.requestFullScreen) {
                document.documentElement.requestFullScreen();
            } else if (document.documentElement.mozRequestFullScreen) {
                document.documentElement.mozRequestFullScreen();
            } else if (document.documentElement.webkitRequestFullScreen) {
                document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
            }
        } else {
            fullScreenMode.textContent = 'fullscreen_exit';
            if (document.cancelFullScreen) {
                document.cancelFullScreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitCancelFullScreen) {
                document.webkitCancelFullScreen();
            }
        }
    });


})(jQuery);
