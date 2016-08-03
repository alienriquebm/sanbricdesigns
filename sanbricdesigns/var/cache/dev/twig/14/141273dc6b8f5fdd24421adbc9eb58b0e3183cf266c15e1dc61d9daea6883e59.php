<?php

/* @WebProfiler/Collector/router.html.twig */
class __TwigTemplate_3ec6280e3edcc53e8cbd0c8bfb1ca670d1068b196116dce4665dbedb03194218 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        // line 1
        $this->parent = $this->loadTemplate("@WebProfiler/Profiler/layout.html.twig", "@WebProfiler/Collector/router.html.twig", 1);
        $this->blocks = array(
            'toolbar' => array($this, 'block_toolbar'),
            'menu' => array($this, 'block_menu'),
            'panel' => array($this, 'block_panel'),
        );
    }

    protected function doGetParent(array $context)
    {
        return "@WebProfiler/Profiler/layout.html.twig";
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $__internal_96f8e4823c2a23c0ff5bab8a21a15e981a73151e94bb395bfbc0e2a8c5b4efa6 = $this->env->getExtension("native_profiler");
        $__internal_96f8e4823c2a23c0ff5bab8a21a15e981a73151e94bb395bfbc0e2a8c5b4efa6->enter($__internal_96f8e4823c2a23c0ff5bab8a21a15e981a73151e94bb395bfbc0e2a8c5b4efa6_prof = new Twig_Profiler_Profile($this->getTemplateName(), "template", "@WebProfiler/Collector/router.html.twig"));

        $this->parent->display($context, array_merge($this->blocks, $blocks));
        
        $__internal_96f8e4823c2a23c0ff5bab8a21a15e981a73151e94bb395bfbc0e2a8c5b4efa6->leave($__internal_96f8e4823c2a23c0ff5bab8a21a15e981a73151e94bb395bfbc0e2a8c5b4efa6_prof);

    }

    // line 3
    public function block_toolbar($context, array $blocks = array())
    {
        $__internal_5f913d5b377b50fa9a0f27bb34abdf9ed0bb34631cd15eb05836860e3b007681 = $this->env->getExtension("native_profiler");
        $__internal_5f913d5b377b50fa9a0f27bb34abdf9ed0bb34631cd15eb05836860e3b007681->enter($__internal_5f913d5b377b50fa9a0f27bb34abdf9ed0bb34631cd15eb05836860e3b007681_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "toolbar"));

        
        $__internal_5f913d5b377b50fa9a0f27bb34abdf9ed0bb34631cd15eb05836860e3b007681->leave($__internal_5f913d5b377b50fa9a0f27bb34abdf9ed0bb34631cd15eb05836860e3b007681_prof);

    }

    // line 5
    public function block_menu($context, array $blocks = array())
    {
        $__internal_9c3406e540a092777c3aabda276e9378cf9b450635fa637d44b385e76e30f2e3 = $this->env->getExtension("native_profiler");
        $__internal_9c3406e540a092777c3aabda276e9378cf9b450635fa637d44b385e76e30f2e3->enter($__internal_9c3406e540a092777c3aabda276e9378cf9b450635fa637d44b385e76e30f2e3_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "menu"));

        // line 6
        echo "<span class=\"label\">
    <span class=\"icon\">";
        // line 7
        echo twig_include($this->env, $context, "@WebProfiler/Icon/router.svg");
        echo "</span>
    <strong>Routing</strong>
</span>
";
        
        $__internal_9c3406e540a092777c3aabda276e9378cf9b450635fa637d44b385e76e30f2e3->leave($__internal_9c3406e540a092777c3aabda276e9378cf9b450635fa637d44b385e76e30f2e3_prof);

    }

    // line 12
    public function block_panel($context, array $blocks = array())
    {
        $__internal_ee718145301e4e604bacf5f34041b049e08be783320181e50d1bb26460296f04 = $this->env->getExtension("native_profiler");
        $__internal_ee718145301e4e604bacf5f34041b049e08be783320181e50d1bb26460296f04->enter($__internal_ee718145301e4e604bacf5f34041b049e08be783320181e50d1bb26460296f04_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "panel"));

        // line 13
        echo "    ";
        echo $this->env->getExtension('http_kernel')->renderFragment($this->env->getExtension('routing')->getPath("_profiler_router", array("token" => (isset($context["token"]) ? $context["token"] : $this->getContext($context, "token")))));
        echo "
";
        
        $__internal_ee718145301e4e604bacf5f34041b049e08be783320181e50d1bb26460296f04->leave($__internal_ee718145301e4e604bacf5f34041b049e08be783320181e50d1bb26460296f04_prof);

    }

    public function getTemplateName()
    {
        return "@WebProfiler/Collector/router.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  73 => 13,  67 => 12,  56 => 7,  53 => 6,  47 => 5,  36 => 3,  11 => 1,);
    }
}
/* {% extends '@WebProfiler/Profiler/layout.html.twig' %}*/
/* */
/* {% block toolbar %}{% endblock %}*/
/* */
/* {% block menu %}*/
/* <span class="label">*/
/*     <span class="icon">{{ include('@WebProfiler/Icon/router.svg') }}</span>*/
/*     <strong>Routing</strong>*/
/* </span>*/
/* {% endblock %}*/
/* */
/* {% block panel %}*/
/*     {{ render(path('_profiler_router', { token: token })) }}*/
/* {% endblock %}*/
/* */
