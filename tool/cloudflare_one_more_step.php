<?php

if (I_Love_Cloudflare() || I_Come_From_Cloudflare()) {
  echo(file_get_contents('cloudflare.onemorestep.template.html'));
  die;
}
