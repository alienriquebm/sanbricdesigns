<?php

namespace Sanbric\MainBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use FOS\RestBundle\Controller\Annotations as Rest;
use FOS\RestBundle\Controller\FOSRestController;
use Symfony\Component\HttpFoundation\Response;

class DefaultController extends FOSRestController
{
    /**
     * @Rest\Get("/")
     */
    public function indexAction(Request $request)
    {
        $view = $this->view(['hello' => 'world'], Response::HTTP_OK);
        return $view;
    }

    /**
     * @Rest\Get("/Saluda")
     */
    public function SaludaAction(Request $request)
    {
        $view = $this->view(['hello' => 'Ali'], Response::HTTP_OK);
        return $view;
    }
    /**
     * @Rest\Get("/InfoInicial")
     */
    public function InfoInicialAction(Request $request)
    {
        $view = $this->view(['hello' => 'getInfoInicial'], Response::HTTP_OK);
        return $view;
    }
     /**
     * @Rest\Post("/SetInfoInicial")
     */
    public function SetInfoInicialAction(Request $request)
    {

    $prueba=$request->request->get('', 'default value if bar does not exist');

    return $prueba;
    }
}
