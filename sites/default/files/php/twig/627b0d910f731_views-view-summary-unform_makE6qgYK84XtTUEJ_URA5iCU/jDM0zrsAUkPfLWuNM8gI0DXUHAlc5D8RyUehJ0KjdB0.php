<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* core/modules/views/templates/views-view-summary-unformatted.html.twig */
class __TwigTemplate_39bf32e695331fab1e3832792ab173e5f6d5e89ac26e8d540532fb6bc6e74d43 extends \Twig\Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $this->checkSecurity();
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 23
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(($context["rows"] ?? null));
        foreach ($context['_seq'] as $context["_key"] => $context["row"]) {
            // line 24
            echo "  ";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(((twig_get_attribute($this->env, $this->source, ($context["options"] ?? null), "inline", [], "any", false, false, true, 24)) ? ("<span") : ("<div")));
            echo " >
  ";
            // line 25
            if (twig_get_attribute($this->env, $this->source, $context["row"], "separator", [], "any", false, false, true, 25)) {
                // line 26
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["row"], "separator", [], "any", false, false, true, 26), 26, $this->source), "html", null, true);
            }
            // line 28
            echo "  <a href=\"";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["row"], "url", [], "any", false, false, true, 28), 28, $this->source), "html", null, true);
            echo "\"";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->extensions['Drupal\Core\Template\TwigExtension']->withoutFilter($this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, $context["row"], "attributes", [], "any", false, false, true, 28), "addClass", [0 => ((twig_get_attribute($this->env, $this->source, $context["row"], "active", [], "any", false, false, true, 28)) ? ("is-active") : (""))], "method", false, false, true, 28), 28, $this->source), "href"), "html", null, true);
            echo ">";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["row"], "link", [], "any", false, false, true, 28), 28, $this->source), "html", null, true);
            echo "</a>
  ";
            // line 29
            if (twig_get_attribute($this->env, $this->source, ($context["options"] ?? null), "count", [], "any", false, false, true, 29)) {
                // line 30
                echo "    (";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["row"], "count", [], "any", false, false, true, 30), 30, $this->source), "html", null, true);
                echo ")
  ";
            }
            // line 32
            echo "  ";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(((twig_get_attribute($this->env, $this->source, ($context["options"] ?? null), "inline", [], "any", false, false, true, 32)) ? ("</span>") : ("</div>")));
            echo "
";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['row'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
    }

    public function getTemplateName()
    {
        return "core/modules/views/templates/views-view-summary-unformatted.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  70 => 32,  64 => 30,  62 => 29,  53 => 28,  50 => 26,  48 => 25,  43 => 24,  39 => 23,);
    }

    public function getSourceContext()
    {
        return new Source("", "core/modules/views/templates/views-view-summary-unformatted.html.twig", "C:\\xampp\\htdocs\\ecm-project\\core\\modules\\views\\templates\\views-view-summary-unformatted.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("for" => 23, "if" => 25);
        static $filters = array("escape" => 26, "without" => 28);
        static $functions = array();

        try {
            $this->sandbox->checkSecurity(
                ['for', 'if'],
                ['escape', 'without'],
                []
            );
        } catch (SecurityError $e) {
            $e->setSourceContext($this->source);

            if ($e instanceof SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

    }
}
