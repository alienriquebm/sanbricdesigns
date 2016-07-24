<?php

namespace AppBundle\Controller;

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
     * @Rest\Get("/DiMiNombre")
     */
    public function indexAction(Request $request)
    {
        $view = $this->view(['hello' => 'world'], Response::HTTP_OK);
        return $view;
    }

}
