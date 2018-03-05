<?php
defined('BASEPATH') OR exit('No direct script allowed');
require APPPATH.'/libraries/REST_Controller.php';

class Usuarios extends REST_Controller 
{
    public function __construct(){
        parent::__construct();
        $this->load->database();
        $this->load->helper('url');
      }
    
    public function obtener_get($id=0){
        $usuarios=[];

        if($id>0){
            $this->db ->where('id', $id);
         }

        $usuarios=$this->db->get('usuarios')->result_array();

        if(!empty($usuarios)){
            $this->set_response([
                'status'=>TRUE,
                'message'=>'',
                'result'=>$usuarios],
                REST_Controller::HTTP_OK); //
         }
         else{
            $this ->set_response([
            'status'=>FALSE,
            'message'=>'Usuarios no encontrados',
            'result'=>[]
            ],REST_Controller::HTTP_NOT_FOUND); //NOT_FOUND (404) being the HTTP response code.
         }
    }


    public function eliminar_delete($id){
        //Especificamos que realizaremos la acción sobre el registro con el id especificado.
        $this->db->where('id', $id);
        
        //Ejecutamos la acción delete sobre la tabla usuarios.
        $this->db->delete('usuarios');
        
            $this->set_response([
                'id'=>$id,
                'message'=>'Registro eliminado',
                'result'=>[]
            ], REST_Controller::HTTP_NO_CONTENT);
    }

    public function insertar_post(){
        //Obtenemos la información proveniente del cuerpo del mensaje.
        $data=file_get_contents("php://input");
        
        //Decodificamos a formato json.
        $usuario =json_decode($data);
        
        //Insertamos el registro
        $this->db->insert('usuarios',$usuario);
        
        //Obtenemos el último id registrado en la conexion actual.
        $usuario->id=$this->db->insert_id();
        
        //Retornamos el registro insertado junto con su id correspondiente.
        $this ->set_response($usuario, REST_Controller::HTTP_CREATED);
     }

     public function actualizar_put(){
        //Obtenemos la información proveniente del cuerpo del mensaje
        $data=file_get_contents("php://input");
        
        //Decodificamos a formato json
        $usuario=json_decode($data);
        
        //Especificamos que realizaremos la acción sobre el registro con el id especificado.
        $this->db->where('id',$usuario->id);
        
        //Actualizamos con la información especificada el registro en la tabla usuarios.
        $this->db->update('usuarios', $usuario);
        
        $this->set_response([
           'id'=> $usuario->id,
           'message'=>'Registro actualizado',
           'result' =>[]
        ], REST_Controller::HTTP_NO_CONTENT);
    }
}
