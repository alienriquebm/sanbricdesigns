<?php

/* SanbricMainBundle:Empresa:obtener_datos_empresa.html.twig */
class __TwigTemplate_75a27f8c3f5eb2f4e35a9a79416abc802d775fbc46753f3801c6909a9fdcc68c extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        // line 1
        $this->parent = $this->loadTemplate("::base.html.twig", "SanbricMainBundle:Empresa:obtener_datos_empresa.html.twig", 1);
        $this->blocks = array(
            'title' => array($this, 'block_title'),
            'body' => array($this, 'block_body'),
        );
    }

    protected function doGetParent(array $context)
    {
        return "::base.html.twig";
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $__internal_15837aa69aef2e180e14160c001e76048da3e3596d268ad518bbeb4c1e42ef7c = $this->env->getExtension("native_profiler");
        $__internal_15837aa69aef2e180e14160c001e76048da3e3596d268ad518bbeb4c1e42ef7c->enter($__internal_15837aa69aef2e180e14160c001e76048da3e3596d268ad518bbeb4c1e42ef7c_prof = new Twig_Profiler_Profile($this->getTemplateName(), "template", "SanbricMainBundle:Empresa:obtener_datos_empresa.html.twig"));

        $this->parent->display($context, array_merge($this->blocks, $blocks));
        
        $__internal_15837aa69aef2e180e14160c001e76048da3e3596d268ad518bbeb4c1e42ef7c->leave($__internal_15837aa69aef2e180e14160c001e76048da3e3596d268ad518bbeb4c1e42ef7c_prof);

    }

    // line 3
    public function block_title($context, array $blocks = array())
    {
        $__internal_71c06b5b1f42cc4dcb94bd1e318b51a36185ddd239775056cd83e4680bbf2052 = $this->env->getExtension("native_profiler");
        $__internal_71c06b5b1f42cc4dcb94bd1e318b51a36185ddd239775056cd83e4680bbf2052->enter($__internal_71c06b5b1f42cc4dcb94bd1e318b51a36185ddd239775056cd83e4680bbf2052_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "title"));

        echo "SanbricMainBundle:Empresa:ObtenerDatosEmpresa";
        
        $__internal_71c06b5b1f42cc4dcb94bd1e318b51a36185ddd239775056cd83e4680bbf2052->leave($__internal_71c06b5b1f42cc4dcb94bd1e318b51a36185ddd239775056cd83e4680bbf2052_prof);

    }

    // line 5
    public function block_body($context, array $blocks = array())
    {
        $__internal_6b6fbc55b19e5651f6d7c262833618d8b4abc816306456b53afcb7cf37cfede3 = $this->env->getExtension("native_profiler");
        $__internal_6b6fbc55b19e5651f6d7c262833618d8b4abc816306456b53afcb7cf37cfede3->enter($__internal_6b6fbc55b19e5651f6d7c262833618d8b4abc816306456b53afcb7cf37cfede3_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "body"));

        // line 6
        echo "<h1>Welcome to the Empresa:ObtenerDatosEmpresa page</h1>
";
        
        $__internal_6b6fbc55b19e5651f6d7c262833618d8b4abc816306456b53afcb7cf37cfede3->leave($__internal_6b6fbc55b19e5651f6d7c262833618d8b4abc816306456b53afcb7cf37cfede3_prof);

    }

    public function getTemplateName()
    {
        return "SanbricMainBundle:Empresa:obtener_datos_empresa.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  53 => 6,  47 => 5,  35 => 3,  11 => 1,);
    }
}
/* {% extends "::base.html.twig" %}*/
/* */
/* {% block title %}SanbricMainBundle:Empresa:ObtenerDatosEmpresa{% endblock %}*/
/* */
/* {% block body %}*/
/* <h1>Welcome to the Empresa:ObtenerDatosEmpresa page</h1>*/
/* {% endblock %}*/
/* */
