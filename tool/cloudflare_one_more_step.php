<?php

if (I_Love_Cloudflare() || I_Come_From_Cloudflare()) {
  require 'cloudflare.onemorestep.template.php';
  die;
}
