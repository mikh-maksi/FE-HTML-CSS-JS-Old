<?php
  register_sidebar(array('name'=>'sidebar1'));
  register_sidebar(array('name'=>'sidebar2'));
  
function register_my_menus()
{
register_nav_menus
(
array( 'main-menu' => 'main-menu', 'sidebar-menu' => 'sidebar-menu', 'sidebar-menu1' => 'sidebar-menu1')
);
}

if (function_exists('register_nav_menus'))
{
	add_action( 'init', 'register_my_menus' );
}
 ?>	
 