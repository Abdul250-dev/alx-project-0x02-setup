import Header from '../components/layout/Header';
import Button from '../components/common/Button';

export default function About() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">About Page</h1>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <p className="text-gray-600 leading-relaxed">
              This is the about page of our Next.js project. Here we demonstrate
              the usage of different button components with various sizes and shapes.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Button Examples</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-2">Small Buttons</h3>
                <div className="space-x-2">
                  <Button size="small" shape="rounded-sm">
                    Small Sharp
                  </Button>
                  <Button size="small" shape="rounded-md">
                    Small Medium
                  </Button>
                  <Button size="small" shape="rounded-full">
                    Small Round
                  </Button>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-2">Medium Buttons</h3>
                <div className="space-x-2">
                  <Button size="medium" shape="rounded-sm">
                    Medium Sharp
                  </Button>
                  <Button size="medium" shape="rounded-md">
                    Medium Medium
                  </Button>
                  <Button size="medium" shape="rounded-full">
                    Medium Round
                  </Button>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-2">Large Buttons</h3>
                <div className="space-x-2">
                  <Button size="large" shape="rounded-sm">
                    Large Sharp
                  </Button>
                  <Button size="large" shape="rounded-md">
                    Large Medium
                  </Button>
                  <Button size="large" shape="rounded-full">
                    Large Round
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}