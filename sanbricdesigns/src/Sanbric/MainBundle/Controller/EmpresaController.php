<?php

namespace Sanbric\MainBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use FOS\RestBundle\Controller\Annotations as Rest;
use FOS\RestBundle\Controller\FOSRestController;
use Symfony\Component\HttpFoundation\Response;
use Sanbric\MainBundle\Entity\Empresa;

class EmpresaController extends FOSRestController
{
    /**
     * @Rest\Post("/AgregarDatosEmpresa")
     */
    public function AgregarDatosEmpresaAction(Request $request)
    {
        // Obtener datos del request
        $nombre=$request->request->get('nombre');
        $rif=$request->request->get('rif');
        $telefono=$request->request->get('telefono');
        $direccion=$request->request->get('direccion');
        $correo=$request->request->get('correo');

        //nombre de la empresa no puede ser vacío

        if($nombre == 'null' || $nombre == ''){
            return $view = $this->view(['error' => 'El nombre de la empresa no puede ser vacío'], Response::HTTP_PRECONDITION_FAILED);
        }

        //rif de la empresa no puede ser vacío
        if($rif == 'null' || $rif == ''){
            return $view = $this->view(['error' => 'El RIF de la empresa no puede ser vacío'], Response::HTTP_PRECONDITION_FAILED);
        }

        //Consulta a la base de datos
        $em = $this->getDoctrine()->getManager();
        $empresa_existente = $em->getRepository('SanbricMainBundle:Empresa')->findAll();
        // ¿Existe ya el registro de la empresa? Si es así, salir.
        if(count($empresa_existente) > 0) {
             return $view = $this->view(['error' => 'Ya existe el registro de empresa'], Response::HTTP_PRECONDITION_FAILED);
        }

        // Si no hay registros de la empresa
        $empresa = new Empresa();
        $empresa->setNombre($nombre);
        $empresa->setRif($rif);
        $empresa->setTelefono($telefono);
        $empresa->setDireccion($direccion);
        $empresa->setCorreo($correo);


        $em = $this->getDoctrine()->getManager();
        $em->persist($empresa);
        $em->flush();
        $view = $this->view(['estatus' => 'OK','message' => 'Datos de empresa agregados correctamente, ID: '.$empresa->getId()], Response::HTTP_OK);
        return $view;
    }

    /**
     * @Rest\Get("/ObtenerDatosEmpresa")
     */
    public function ObtenerDatosEmpresaAction(Request $request)
    {
        $em = $this->getDoctrine()->getManager();
        $empresa_existente = $em->getRepository('SanbricMainBundle:Empresa')->findAll();
        if(count($empresa_existente) <= 0) {
             return $view = $this->view(['error' => 'No existe registro de empresa alguna.'], Response::HTTP_PRECONDITION_FAILED);
        }
        return $this->view($empresa_existente, Response::HTTP_OK);
    }

    /**
     * @Rest\Post("/ActualizarDatosEmpresa")
     */
    public function ActualizarDatosEmpresaAction(Request $request)
    {
        // Obtener datos del request
        $id=$request->request->get('id');
        $nombre=$request->request->get('nombre');
        $rif=$request->request->get('rif');
        $telefono=$request->request->get('telefono');
        $direccion=$request->request->get('direccion');
        $correo=$request->request->get('correo');

        //ID de la empresa no puede ser vacío
        if($id == ''){
            return $view = $this->view(['error' => 'El ID de la empresa no puede ser vacío'], Response::HTTP_PRECONDITION_FAILED);
        }

        //Consulta a la base de datos
        $em = $this->getDoctrine()->getManager();
        //Seleccionar empresa existente
        $empresa_existente = $em->getRepository('SanbricMainBundle:Empresa')->findOneBy(array ('id' => $id));

        // ¿No existe el registro de la empresa? Si es así, salir.
        if(count($empresa_existente) <= 0) {
             return $view = $this->view(['error' => 'No existe registro de empresa'], Response::HTTP_PRECONDITION_FAILED);
        }

        // Actualizar registros de la empresa
        if($nombre != ''){
            $empresa_existente->setNombre($nombre);    
        }
        
        if ($rif != '') {
            $empresa_existente->setRif($rif);
        }

        if ($telefono != '') {
            $empresa_existente->setTelefono($telefono);
        }
        
        if ($direccion != '') {
            $empresa_existente->setDireccion($direccion);
        }

        if ($correo != '') {
            $empresa_existente->setCorreo($correo);
        }
        //Guardar
        $em->flush();
        $view = $this->view(['estatus' => 'OK','message' => 'Datos de empresa actualizados correctamente, RIF: '.$empresa_existente->getRif()], Response::HTTP_OK);
        return $view;
    }


}
