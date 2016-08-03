<?php

/* FOSUserBundle:Registration:register.html.twig */
class __TwigTemplate_2cf29cf915d85b8d3861e036b83858505767f5bf8cfb2498e9725834148557f9 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        // line 1
        $this->parent = $this->loadTemplate("FOSUserBundle::layout.html.twig", "FOSUserBundle:Registration:register.html.twig", 1);
        $this->blocks = array(
            'fos_user_content' => array($this, 'block_fos_user_content'),
        );
    }

    protected function doGetParent(array $context)
    {
        return "FOSUserBundle::layout.html.twig";
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $__internal_0b849f3ce89e2f9ecdff4727ba59deae9fa6fd7cfaef40bed782eeaccfa31ca0 = $this->env->getExtension("native_profiler");
        $__internal_0b849f3ce89e2f9ecdff4727ba59deae9fa6fd7cfaef40bed782eeaccfa31ca0->enter($__internal_0b849f3ce89e2f9ecdff4727ba59deae9fa6fd7cfaef40bed782eeaccfa31ca0_prof = new Twig_Profiler_Profile($this->getTemplateName(), "template", "FOSUserBundle:Registration:register.html.twig"));

        $this->parent->display($context, array_merge($this->blocks, $blocks));
        
        $__internal_0b849f3ce89e2f9ecdff4727ba59deae9fa6fd7cfaef40bed782eeaccfa31ca0->leave($__internal_0b849f3ce89e2f9ecdff4727ba59deae9fa6fd7cfaef40bed782eeaccfa31ca0_prof);

    }

    // line 3
    public function block_fos_user_content($context, array $blocks = array())
    {
        $__internal_1eb4c681eaabd2f74ab475c703140eef32871687c39847dfa72717474e12e1d1 = $this->env->getExtension("native_profiler");
        $__internal_1eb4c681eaabd2f74ab475c703140eef32871687c39847dfa72717474e12e1d1->enter($__internal_1eb4c681eaabd2f74ab475c703140eef32871687c39847dfa72717474e12e1d1_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "fos_user_content"));

        // line 4
        $this->loadTemplate("FOSUserBundle:Registration:register_content.html.twig", "FOSUserBundle:Registration:register.html.twig", 4)->display($context);
        
        $__internal_1eb4c681eaabd2f74ab475c703140eef32871687c39847dfa72717474e12e1d1->leave($__internal_1eb4c681eaabd2f74ab475c703140eef32871687c39847dfa72717474e12e1d1_prof);

    }

    public function getTemplateName()
    {
        return "FOSUserBundle:Registration:register.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  40 => 4,  34 => 3,  11 => 1,);
    }
}
/* {% extends "FOSUserBundle::layout.html.twig" %}*/
/* */
/* {% block fos_user_content %}*/
/* {% include "FOSUserBundle:Registration:register_content.html.twig" %}*/
/* {% endblock fos_user_content %}*/
/* */
