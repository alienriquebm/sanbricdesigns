<?php

/* @Twig/Exception/exception_full.html.twig */
class __TwigTemplate_28ffa4d9913865dbbfee70e6a050fa8c239c9fd93a591ae37529e6e19c2222c2 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        // line 1
        $this->parent = $this->loadTemplate("@Twig/layout.html.twig", "@Twig/Exception/exception_full.html.twig", 1);
        $this->blocks = array(
            'head' => array($this, 'block_head'),
            'title' => array($this, 'block_title'),
            'body' => array($this, 'block_body'),
        );
    }

    protected function doGetParent(array $context)
    {
        return "@Twig/layout.html.twig";
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $__internal_24e45583be263aa914a95377327c848e766b20f541c3eb85a25fce70679dcf1f = $this->env->getExtension("native_profiler");
        $__internal_24e45583be263aa914a95377327c848e766b20f541c3eb85a25fce70679dcf1f->enter($__internal_24e45583be263aa914a95377327c848e766b20f541c3eb85a25fce70679dcf1f_prof = new Twig_Profiler_Profile($this->getTemplateName(), "template", "@Twig/Exception/exception_full.html.twig"));

        $this->parent->display($context, array_merge($this->blocks, $blocks));
        
        $__internal_24e45583be263aa914a95377327c848e766b20f541c3eb85a25fce70679dcf1f->leave($__internal_24e45583be263aa914a95377327c848e766b20f541c3eb85a25fce70679dcf1f_prof);

    }

    // line 3
    public function block_head($context, array $blocks = array())
    {
        $__internal_10cdd8fdbe0e38fb210207d910809fa75e5cd125b220c6c93f54915401ecd3c4 = $this->env->getExtension("native_profiler");
        $__internal_10cdd8fdbe0e38fb210207d910809fa75e5cd125b220c6c93f54915401ecd3c4->enter($__internal_10cdd8fdbe0e38fb210207d910809fa75e5cd125b220c6c93f54915401ecd3c4_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "head"));

        // line 4
        echo "    <link href=\"";
        echo twig_escape_filter($this->env, $this->env->getExtension('request')->generateAbsoluteUrl($this->env->getExtension('asset')->getAssetUrl("bundles/framework/css/exception.css")), "html", null, true);
        echo "\" rel=\"stylesheet\" type=\"text/css\" media=\"all\" />
";
        
        $__internal_10cdd8fdbe0e38fb210207d910809fa75e5cd125b220c6c93f54915401ecd3c4->leave($__internal_10cdd8fdbe0e38fb210207d910809fa75e5cd125b220c6c93f54915401ecd3c4_prof);

    }

    // line 7
    public function block_title($context, array $blocks = array())
    {
        $__internal_c909a03e0bf5b9ce58bbf21486445a36c7207c7ca605c4ede6bd5159d2a3e0eb = $this->env->getExtension("native_profiler");
        $__internal_c909a03e0bf5b9ce58bbf21486445a36c7207c7ca605c4ede6bd5159d2a3e0eb->enter($__internal_c909a03e0bf5b9ce58bbf21486445a36c7207c7ca605c4ede6bd5159d2a3e0eb_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "title"));

        // line 8
        echo "    ";
        echo twig_escape_filter($this->env, $this->getAttribute((isset($context["exception"]) ? $context["exception"] : $this->getContext($context, "exception")), "message", array()), "html", null, true);
        echo " (";
        echo twig_escape_filter($this->env, (isset($context["status_code"]) ? $context["status_code"] : $this->getContext($context, "status_code")), "html", null, true);
        echo " ";
        echo twig_escape_filter($this->env, (isset($context["status_text"]) ? $context["status_text"] : $this->getContext($context, "status_text")), "html", null, true);
        echo ")
";
        
        $__internal_c909a03e0bf5b9ce58bbf21486445a36c7207c7ca605c4ede6bd5159d2a3e0eb->leave($__internal_c909a03e0bf5b9ce58bbf21486445a36c7207c7ca605c4ede6bd5159d2a3e0eb_prof);

    }

    // line 11
    public function block_body($context, array $blocks = array())
    {
        $__internal_7e8137a268dfefaebc376e31ba280e9737e148c76518ccf3f834a6b47661ae2d = $this->env->getExtension("native_profiler");
        $__internal_7e8137a268dfefaebc376e31ba280e9737e148c76518ccf3f834a6b47661ae2d->enter($__internal_7e8137a268dfefaebc376e31ba280e9737e148c76518ccf3f834a6b47661ae2d_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "body"));

        // line 12
        echo "    ";
        $this->loadTemplate("@Twig/Exception/exception.html.twig", "@Twig/Exception/exception_full.html.twig", 12)->display($context);
        
        $__internal_7e8137a268dfefaebc376e31ba280e9737e148c76518ccf3f834a6b47661ae2d->leave($__internal_7e8137a268dfefaebc376e31ba280e9737e148c76518ccf3f834a6b47661ae2d_prof);

    }

    public function getTemplateName()
    {
        return "@Twig/Exception/exception_full.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  78 => 12,  72 => 11,  58 => 8,  52 => 7,  42 => 4,  36 => 3,  11 => 1,);
    }
}
/* {% extends '@Twig/layout.html.twig' %}*/
/* */
/* {% block head %}*/
/*     <link href="{{ absolute_url(asset('bundles/framework/css/exception.css')) }}" rel="stylesheet" type="text/css" media="all" />*/
/* {% endblock %}*/
/* */
/* {% block title %}*/
/*     {{ exception.message }} ({{ status_code }} {{ status_text }})*/
/* {% endblock %}*/
/* */
/* {% block body %}*/
/*     {% include '@Twig/Exception/exception.html.twig' %}*/
/* {% endblock %}*/
/* */
