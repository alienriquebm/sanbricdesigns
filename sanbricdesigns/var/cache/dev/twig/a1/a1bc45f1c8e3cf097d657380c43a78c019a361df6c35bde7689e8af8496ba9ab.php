<?php

/* @Twig/Exception/exception.json.twig */
class __TwigTemplate_457ef705ab37ebc83caf3ae0d187689a2b06eca26d1a550d0f1a0608532934b1 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $__internal_0a98281bdeec0b75d6e8d23322b968af1057f24e1bdcf160ae9ffbcc1b616f47 = $this->env->getExtension("native_profiler");
        $__internal_0a98281bdeec0b75d6e8d23322b968af1057f24e1bdcf160ae9ffbcc1b616f47->enter($__internal_0a98281bdeec0b75d6e8d23322b968af1057f24e1bdcf160ae9ffbcc1b616f47_prof = new Twig_Profiler_Profile($this->getTemplateName(), "template", "@Twig/Exception/exception.json.twig"));

        // line 1
        echo twig_jsonencode_filter(array("error" => array("code" => (isset($context["status_code"]) ? $context["status_code"] : $this->getContext($context, "status_code")), "message" => (isset($context["status_text"]) ? $context["status_text"] : $this->getContext($context, "status_text")), "exception" => $this->getAttribute((isset($context["exception"]) ? $context["exception"] : $this->getContext($context, "exception")), "toarray", array()))));
        echo "
";
        
        $__internal_0a98281bdeec0b75d6e8d23322b968af1057f24e1bdcf160ae9ffbcc1b616f47->leave($__internal_0a98281bdeec0b75d6e8d23322b968af1057f24e1bdcf160ae9ffbcc1b616f47_prof);

    }

    public function getTemplateName()
    {
        return "@Twig/Exception/exception.json.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  22 => 1,);
    }
}
/* {{ { 'error': { 'code': status_code, 'message': status_text, 'exception': exception.toarray } }|json_encode|raw }}*/
/* */
