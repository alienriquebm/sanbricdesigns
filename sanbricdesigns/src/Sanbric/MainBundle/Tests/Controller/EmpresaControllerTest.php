<?php

namespace Sanbric\MainBundle\Tests\Controller;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class EmpresaControllerTest extends WebTestCase
{
    public function testAgregardatosempresa()
    {
        $client = static::createClient();

        $crawler = $client->request('GET', '/AgregarDatosEmpresa');
    }

    public function testObtenerdatosempresa()
    {
        $client = static::createClient();

        $crawler = $client->request('GET', '/ObtenerDatosEmpresa');
    }

}
