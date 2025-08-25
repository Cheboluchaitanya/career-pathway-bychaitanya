import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { getRoleById } from "@/data/careerData";
import { 
  Briefcase, 
  Building2, 
  DollarSign, 
  TrendingUp, 
  CheckCircle, 
  MapPin,
  ArrowRight,
  Target,
  BookOpen,
  Users
} from "lucide-react";
import NotFound from "@/pages/NotFound";

/**
 * Role detail page component - Shows comprehensive information about a specific career role
 * including description, requirements, career pathway, and industry insights
 */
export default function Role() {
  const { roleId } = useParams<{ roleId: string }>();
  
  if (!roleId) {
    return <NotFound />;
  }

  const roleData = getRoleById(roleId);
  
  if (!roleData) {
    return <NotFound />;
  }

  return (
    <Layout 
      title={`${roleData.title} Career Path`}
      showBackButton={true}
      showSearch={true}
    >
      {/* Role Header */}
      <div className="text-center mb-12">
        <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
          <Briefcase className="w-8 h-8 text-white" />
        </div>
        
        <h1 className="text-4xl font-bold text-foreground mb-4">
          {roleData.title}
        </h1>
        
        <div className="flex items-center justify-center gap-2 text-muted-foreground mb-4">
          <MapPin className="w-4 h-4" />
          <span>From {roleData.department} Department</span>
        </div>
        
        <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-6">
          {roleData.description}
        </p>
        
        <div className="flex flex-wrap justify-center gap-6 text-sm">
          <div className="flex items-center gap-2 text-success">
            <DollarSign className="w-4 h-4" />
            <span className="font-semibold">{roleData.salary}</span>
          </div>
          <div className="flex items-center gap-2 text-primary">
            <TrendingUp className="w-4 h-4" />
            <span>{roleData.growth}</span>
          </div>
          <div className="flex items-center gap-2 text-accent">
            <Users className="w-4 h-4" />
            <span>{roleData.industries.length} Industries</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Skills and Requirements */}
        <div className="lg:col-span-1 space-y-6">
          {/* Required Skills */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5 text-primary" />
                Required Skills
              </CardTitle>
              <CardDescription>
                Key competencies you need to develop for this role
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {roleData.skills.map((skill) => (
                  <div 
                    key={skill}
                    className="flex items-center gap-2 p-3 bg-muted rounded-lg"
                  >
                    <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                    <span className="text-sm font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Industries */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building2 className="w-5 h-5 text-accent" />
                Target Industries
              </CardTitle>
              <CardDescription>
                Industries where this role is in high demand
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {roleData.industries.map((industry) => (
                  <Badge 
                    key={industry}
                    variant="secondary"
                    className="bg-accent-lighter text-accent border-accent/20"
                  >
                    {industry}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Companies */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-secondary" />
                Hiring Companies
              </CardTitle>
              <CardDescription>
                Top companies actively recruiting for this role
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {roleData.companies.map((company, index) => (
                  <div 
                    key={company}
                    className="p-3 bg-muted rounded-lg text-sm font-medium flex items-center justify-between"
                  >
                    <span>{company}</span>
                    {index < 3 && (
                      <Badge variant="outline" className="text-xs">
                        Top Recruiter
                      </Badge>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Career Pathway */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <BookOpen className="w-6 h-6 text-primary" />
                Career Pathway
              </CardTitle>
              <CardDescription className="text-base">
                A step-by-step guide to transition from your college subjects to this career role
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {roleData.pathway.map((step, index) => (
                  <div key={index} className="flex gap-4">
                    {/* Step Number */}
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </div>
                      {index < roleData.pathway.length - 1 && (
                        <div className="w-0.5 h-8 bg-border mx-auto mt-2"></div>
                      )}
                    </div>
                    
                    {/* Step Content */}
                    <div className="flex-1 pb-4">
                      <div className="p-4 bg-gradient-subtle rounded-lg border">
                        <p className="text-foreground font-medium leading-relaxed">
                          {step}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <Separator className="my-8" />

              {/* Additional Resources */}
              <div className="text-center">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Ready to start your journey?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Begin with foundational skills and gradually build expertise in this field
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="hero" asChild>
                    <Link to={`/department/${roleData.department.toLowerCase()}`}>
                      Explore More Roles
                    </Link>
                  </Button>
                  
                  <Button variant="outline" asChild>
                    <Link to="/search">
                      Find Similar Roles
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Career Growth Info */}
          <Card className="mt-6">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-success/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-success" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Career Growth Outlook</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {roleData.growth}. This role offers excellent opportunities for skill development, 
                    career advancement, and specialization in emerging technologies.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}