var SessionTimeoutDemo={init:function(){$.sessionTimeout({title:"اطلاعیه منقضی شدن سشن",message:"سشن شما به پایان رسیده است\n.",keepAliveUrl:"#",redirUrl:"?p=page_user_lock_1",logoutUrl:"?p=page_user_login_1",warnAfter:3e3,redirAfter:35e3,ignoreUserActivity:!0,countdownMessage:"در حال انتقال بعد از {timer} ثانیه.",countdownBar:!0})}};jQuery(document).ready(function(){SessionTimeoutDemo.init()});