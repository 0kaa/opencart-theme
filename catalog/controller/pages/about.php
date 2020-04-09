<?php

class Controllerpagesabout extends Controller
{
    public function index()
    {
        $this->load->language('pages/about');
        $data = array();

        $this->document->setTitle($this->language->get('meta_title'));

        $data['breadcrumbs'] = array();

        $data['breadcrumbs'][] = array(
            'text' => $this->language->get('text_home'),
            'href' => $this->url->link('common/home')
        );
        $data['breadcrumbs'][] = array(
            'text' => $this->language->get('title'),
            'href' => $this->url->link('pages/about')
        );


        $data['categories'] = array();
        $this->load->model('catalog/category');

        $results = $this->model_catalog_category->getCategories(0);



        $this->load->model('tool/image');

        foreach ($results as $result) {

            if ($result['image']) {
                $image = $this->model_tool_image->resize($result['image'], 150, 150);
            } else {
                $image = $this->model_tool_image->resize('placeholder.png', 150, 150);
            }

            $data['categories'][] = array(
                'name' => $result['name'],
                'image' => $image,
                'href' => $this->url->link('product/category', 'path=' . $result['category_id'])

            );
        }

        $data['products'] = array();
        $this->load->model('catalog/product');

        $results2 = $this->model_catalog_product->getProducts(0);

        foreach ($results2 as $result) {
            if ($result['image']) {
                $image = $this->model_tool_image->resize($result['image'], 450, 150);
            } else {
                $image = $this->model_tool_image->resize('placeholder.png', 450, 150);
            }
            $data['products'][] = array(
                'name' => $result['name'],
                'image' => $image,
                'href' => $this->url->link('product/product', 'product_id=' . $result['product_id'])
            );
        }

        $data['header'] = $this->load->controller('common/header');
        $data['content_top'] = $this->load->controller('common/content_top');
        $data['content_bottom'] = $this->load->controller('common/content_bottom');
        $data['column_left'] = $this->load->controller('common/column_left');
        $data['column_right'] = $this->load->controller('common/column_right');
        $data['footer'] = $this->load->controller('common/footer');

        $this->response->setOutput($this->load->view('pages/about', $data));
    }
}
