<?php

/* ::base.html.twig */
class __TwigTemplate_a108e915fc01a38d9d171394a3cb11467011f1c7260acd766605bcb1b8b82c83 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
            'title' => array($this, 'block_title'),
            'stylesheets' => array($this, 'block_stylesheets'),
            'body' => array($this, 'block_body'),
            'javascripts' => array($this, 'block_javascripts'),
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $__internal_36d2a800bbc651106f5f23206fd76d4c93df1dfb6be8b5853bd5416866cb5a21 = $this->env->getExtension("native_profiler");
        $__internal_36d2a800bbc651106f5f23206fd76d4c93df1dfb6be8b5853bd5416866cb5a21->enter($__internal_36d2a800bbc651106f5f23206fd76d4c93df1dfb6be8b5853bd5416866cb5a21_prof = new Twig_Profiler_Profile($this->getTemplateName(), "template", "::base.html.twig"));

        // line 1
        echo "<!DOCTYPE html>
<html>
    <head>
        <meta charset=\"UTF-8\" />
        <title>";
        // line 5
        $this->displayBlock('title', $context, $blocks);
        echo "</title>
        ";
        // line 6
        $this->displayBlock('stylesheets', $context, $blocks);
        // line 7
        echo "        <link rel=\"icon\" type=\"image/x-icon\" href=\"";
        echo twig_escape_filter($this->env, $this->env->getExtension('asset')->getAssetUrl("favicon.ico"), "html", null, true);
        echo "\" />
    </head>
    <body>
        ";
        // line 10
        $this->displayBlock('body', $context, $blocks);
        // line 11
        echo "        ";
        $this->displayBlock('javascripts', $context, $blocks);
        // line 12
        echo "    </body>
</html>
";
        
        $__internal_36d2a800bbc651106f5f23206fd76d4c93df1dfb6be8b5853bd5416866cb5a21->leave($__internal_36d2a800bbc651106f5f23206fd76d4c93df1dfb6be8b5853bd5416866cb5a21_prof);

    }

    // line 5
    public function block_title($context, array $blocks = array())
    {
        $__internal_fb903c9df6b485c92413e14e61bf4f9ecddb0a9dfc93389e296a0e41b6a6c510 = $this->env->getExtension("native_profiler");
        $__internal_fb903c9df6b485c92413e14e61bf4f9ecddb0a9dfc93389e296a0e41b6a6c510->enter($__internal_fb903c9df6b485c92413e14e61bf4f9ecddb0a9dfc93389e296a0e41b6a6c510_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "title"));

        echo "Welcome!";
        
        $__internal_fb903c9df6b485c92413e14e61bf4f9ecddb0a9dfc93389e296a0e41b6a6c510->leave($__internal_fb903c9df6b485c92413e14e61bf4f9ecddb0a9dfc93389e296a0e41b6a6c510_prof);

    }

    // line 6
    public function block_stylesheets($context, array $blocks = array())
    {
        $__internal_93cdcf0a010c42dc81c920e1ed8f61b5fb239a1ed90bc35ab021d88e98136f17 = $this->env->getExtension("native_profiler");
        $__internal_93cdcf0a010c42dc81c920e1ed8f61b5fb239a1ed90bc35ab021d88e98136f17->enter($__internal_93cdcf0a010c42dc81c920e1ed8f61b5fb239a1ed90bc35ab021d88e98136f17_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "stylesheets"));

        
        $__internal_93cdcf0a010c42dc81c920e1ed8f61b5fb239a1ed90bc35ab021d88e98136f17->leave($__internal_93cdcf0a010c42dc81c920e1ed8f61b5fb239a1ed90bc35ab021d88e98136f17_prof);

    }

    // line 10
    public function block_body($context, array $blocks = array())
    {
        $__internal_c80935a20ce4ba836c7835d6beca8a039371a2e77125c7ca60443809158f4f76 = $this->env->getExtension("native_profiler");
        $__internal_c80935a20ce4ba836c7835d6beca8a039371a2e77125c7ca60443809158f4f76->enter($__internal_c80935a20ce4ba836c7835d6beca8a039371a2e77125c7ca60443809158f4f76_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "body"));

        
        $__internal_c80935a20ce4ba836c7835d6beca8a039371a2e77125c7ca60443809158f4f76->leave($__internal_c80935a20ce4ba836c7835d6beca8a039371a2e77125c7ca60443809158f4f76_prof);

    }

    // line 11
    public function block_javascripts($context, array $blocks = array())
    {
        $__internal_a4ca88a5a7dc006c8a6cd3e0d6a3c60ead2a9205a4a0654e0004105097d8038a = $this->env->getExtension("native_profiler");
        $__internal_a4ca88a5a7dc006c8a6cd3e0d6a3c60ead2a9205a4a0654e0004105097d8038a->enter($__internal_a4ca88a5a7dc006c8a6cd3e0d6a3c60ead2a9205a4a0654e0004105097d8038a_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "javascripts"));

        
        $__internal_a4ca88a5a7dc006c8a6cd3e0d6a3c60ead2a9205a4a0654e0004105097d8038a->leave($__internal_a4ca88a5a7dc006c8a6cd3e0d6a3c60ead2a9205a4a0654e0004105097d8038a_prof);

    }

    public function getTemplateName()
    {
        return "::base.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  93 => 11,  82 => 10,  71 => 6,  59 => 5,  50 => 12,  47 => 11,  45 => 10,  38 => 7,  36 => 6,  32 => 5,  26 => 1,);
    }
}
/* <!DOCTYPE html>*/
/* <html>*/
/*     <head>*/
/*         <meta charset="UTF-8" />*/
/*         <title>{% block title %}Welcome!{% endblock %}</title>*/
/*         {% block stylesheets %}{% endblock %}*/
/*         <link rel="icon" type="image/x-icon" href="{{ asset('favicon.ico') }}" />*/
/*     </head>*/
/*     <body>*/
/*         {% block body %}{% endblock %}*/
/*         {% block javascripts %}{% endblock %}*/
/*     </body>*/
/* </html>*/
/* */
