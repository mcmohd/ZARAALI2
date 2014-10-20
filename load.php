<?php

$home =  "/var/www/html/term.js-master";

$current_dir = isset($_POST['id']) ? $_POST['id'] : $home;

$root = array();
if( !strcmp( $current_dir, $home) ){
   $root['id'] = $home;
   $root['text'] = "Project Home";
   $root['type'] = "D";
   $root['state'] = 'open';
   $root['children'] = listFolders( $current_dir );
   echo "[". json_encode($root) . "]";
}else{
   $root = listFolders( $current_dir );
   echo json_encode($root);
}

function listFolders($dir)
{
    $dh = scandir($dir);
    $tree = array();
    $node = array();

    foreach ($dh as $folder) {
        $node = array();

        if ($folder != '.' && $folder != '..') {
            if (is_dir($dir . '/' . $folder)) {
                $node['id'] = $dir . '/' . $folder;
                $node['text'] = $folder;
                $node['state'] = 'closed';
                $node['type'] = "D";
            } else {
                $node['id'] = $dir . '/' . $folder;
                $node['text'] = $folder;
                $node['state'] = 'open';
                $node['type'] = "F";
            }
            array_push($tree, $node);
        }
    }
    return $tree;
}
?>
